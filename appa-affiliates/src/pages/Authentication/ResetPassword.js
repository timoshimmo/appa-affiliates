import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form, Button, Spinner } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate, useLocation } from "react-router-dom";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userResetPassword, resetResetPasswordFlag } from "../../store/actions";

// import images
// import profile from "../../assets/images/bg.png";
import logoLight from "../../assets/images/logo-light.png";
import appaLogoLight from "../../assets/images/appa_store_logo_orange_cropped.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import withRouter from "../../Components/Common/withRouter";

const ResetPasswordPage = props => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: location.state.email,
      reset_token: location.state.reset_token,
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
      confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required')
    }),
    onSubmit: (values) => {
      dispatch(userResetPassword(values, history));
    }
  });

  const { resetError, resetSuccessMsg, loading } = useSelector(state => ({
    resetError: state.ResetPassword.resetError,
    resetSuccessMsg: state.ResetPassword.resetSuccessMsg,
    loading: state.ResetPassword.loading
  }));

  useEffect(() => {
    if (resetSuccessMsg !== null) {
      setTimeout(() => {
        dispatch(resetResetPasswordFlag());
        history("/login");
      }, 5000);   
    }

  }, [dispatch, history, resetSuccessMsg]);

  document.title = "Appa Affiliates | Reset Password";

  return (
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
                    <h5 style={{ color: '#f7941d' }}>Reset Password?</h5>
                    <p className="text-muted">Reset password with Appa Affiliates</p>
                      {/*
                          <lord-icon
                            src="https://cdn.lordicon.com/rhvddzym.json"
                            trigger="loop"
                            colors="primary:#0ab39c"
                            style={{width: "120px", height: "120px"}}
                            className="avatar-xl">
                          </lord-icon>
                      */}
                  </div>

                  {/*
                    <Alert className="alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                      Enter your email and instructions will be sent to you!
                    </Alert>
                  */}
                  <div className="p-2">
                    {resetError && resetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {resetError}
                      </Alert>
                    ) : null}
                    {resetSuccessMsg ? (
                      <>
                        <Alert color="success" style={{ marginTop: "13px", marginBottom: "10px" }}>
                          {resetSuccessMsg}
                        </Alert>
                        <div className="mt-4 text-center">
                          <p className="mb-0">Back to <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Login </Link> </p>
                        </div>
                      </>
                      
                    ) : 
                        <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
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

                        <div className="text-center mt-4">
                          <Button color="dark" disabled={resetError ? false : loading ? true : false} className="btn btn-dark w-100" type="submit">
                              {resetError ? false : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                              Reset Password
                          </Button>
                          {/*<button className="btn btn-dark w-100" type="submit">Send Reset Link</button>*/}
                        </div>
                      </Form>
                    }
                    
                  </div>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </ParticlesAuth>
  );
};

ResetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ResetPasswordPage);
