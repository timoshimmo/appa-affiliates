import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback, Button, Spinner } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
import { registerUser, apiError, resetRegisterFlag } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images 
//import logoLight from "../../assets/images/logo-light.png";
import appaLogoLight from "../../assets/images/appa_store_logo_orange_cropped.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

const Register = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            f_name: '',
            l_name: '',
            phone: '',
            password: '',
            confirm_password: ''
        },
        validationSchema : Yup.object().shape({
            email: Yup.string()
              .email('Please enter a valid email address')
              .required('Please enter your email'),
            f_name: Yup.string().required('Please enter your first name'),
            l_name: Yup.string().required('Please enter your last name'),
            phone: Yup.string()
            .matches(/^\+?\d{6,15}$/, {
                message: "Invalid phone number"
              })
            .required('Please enter your phone number'),
            password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
            confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required')
        }),     
        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const { error, registrationError, success, loading } = useSelector(state => ({
        registrationError: state.Account.registrationError,
        success: state.Account.success,
        error: state.Account.error,
        loading: state.Account.loading
    }));

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            //setTimeout(() => , 3000);
            dispatch(resetRegisterFlag());
            history("/auth-success-msg-basic");
        }

      /*  if (error) {
            dispatch(resetRegisterFlag());
        }*/
//auth-success-msg-basic login

     /*   setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 10000); */

    }, [dispatch, success, error, history]);

    const onDismiss = () => {
        setVisible(false);
        dispatch(resetRegisterFlag());

    }


    document.title = "Appa | Affililiates Registration";

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={appaLogoLight} alt="" height="50" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Become our partner and earn big</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 style={{ color: '#f7941d' }}>Create New Account</h5>
                                            <p className="text-muted">Get your free appa affiliate account now</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                className="needs-validation" action="#">

                                                {success && success ? (
                                                    <>
                                                        {toast("Your Redirect To Login Page...", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                                        <ToastContainer autoClose={2000} limit={1} />
                                                        <Alert color="success">
                                                            Register User Successfully and Your Redirect To Login Page...
                                                        </Alert>
                                                    </>
                                                ) : null}

                                                <Alert color="danger" isOpen={error} toggle={onDismiss}><div>
                                                    {/* {registrationError} */}
                                                    {registrationError}
                                                    </div>
                                                </Alert>

                                                <div className="mb-3">
                                                    <Label htmlFor="f_name" className="form-label">First Name <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="f_name"
                                                        type="text"
                                                        placeholder="Enter First Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.f_name || ""}
                                                        invalid={
                                                            validation.touched.f_name && validation.errors.f_name ? true : false
                                                        }
                                                    />
                                                    {validation.touched.f_name && validation.errors.f_name ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.f_name}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="l_name" className="form-label">Last Name <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="l_name"
                                                        type="text"
                                                        placeholder="Enter Last Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.l_name || ""}
                                                        invalid={
                                                            validation.touched.l_name && validation.errors.l_name ? true : false
                                                        }
                                                    />
                                                    {validation.touched.l_name && validation.errors.l_name ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.l_name}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email address"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="phone" className="form-label">Phone Number<span className="text-danger">*</span></Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="+2348045145123"
                                                        type="tel"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.phone || ""}
                                                        invalid={
                                                            validation.touched.phone && validation.errors.phone ? true : false
                                                        }
                                                    />
                                                    {validation.touched.phone && validation.errors.phone ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.phone}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.password || ""}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-2">
                                                    <Label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.confirm_password || ""}
                                                        invalid={
                                                            validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        }
                                                    />
                                                    {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-4">
                                                    <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Appa
                                                        <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium"> Terms of Use</Link></p>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="dark" disabled={error ? false : loading ? true : false} className="btn btn-dark w-100" type="submit">
                                                        {error ? false : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                        Sign Up
                                                    </Button>
                                                    
                                                </div>

                                                {/*
                                                
                                                <button className="btn btn-dark w-100" type="submit">Sign Up</button>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                                    */}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default Register;
