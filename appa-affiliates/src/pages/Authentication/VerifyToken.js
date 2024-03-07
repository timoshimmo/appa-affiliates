import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form, Button, Spinner } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate, useLocation } from "react-router-dom";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userValidateToken } from "../../store/actions";

// import images
// import profile from "../../assets/images/bg.png";
import logoLight from "../../assets/images/logo-light.png";
import appaLogoLight from "../../assets/images/appa_store_logo_orange_cropped.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import withRouter from "../../Components/Common/withRouter";

const VerifyTokenPage = props => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      reset_token: '',
      email: location.state.email
    },
    validationSchema: Yup.object({
      reset_token: Yup.string().required("Please Enter Your token"),
    }),
    onSubmit: (values) => {
      dispatch(userValidateToken(values, history));
    }
  });

  const { validateTokenError, validateTokenSuccessMsg, loading } = useSelector(state => ({
    validateTokenError: state.ValidateToken.validateTokenError,
    validateTokenSuccessMsg: state.ValidateToken.validateTokenSuccessMsg,
    loading: state.ValidateToken.loading
  }));

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
                    <h5 style={{ color: '#f7941d' }}>Verify Token</h5>
                    <p className="text-muted">4 digit token to verify user email</p>

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

                  <Alert className="alert-borderless alert-success text-center mb-2 mx-2" role="alert">
                    Token successfully sent to Email!
                  </Alert>
                  <div className="p-2">
                    {validateTokenError && validateTokenError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {validateTokenError}
                      </Alert>
                    ) : null}

                    {/*
                    
                  {validateTokenSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {validateTokenSuccessMsg}
                      </Alert>
                    ) : null}
                    */}
                    
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-4">
                        <Label className="form-label">Token</Label>
                        <Input
                          name="reset_token"
                          className="form-control"
                          placeholder="Enter token"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.reset_token || ""}
                          invalid={
                            validation.touched.reset_token && validation.errors.reset_token ? true : false
                          }
                        />
                        {validation.touched.reset_token && validation.errors.reset_token ? (
                          <FormFeedback type="invalid"><div>{validation.errors.reset_token}</div></FormFeedback>
                        ) : null}
                      </div>

                      <div className="text-center mt-4">
                        <Button color="dark" disabled={validateTokenError ? false : loading ? true : false} className="btn btn-dark w-100" type="submit">
                            {validateTokenError ? false : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                            Verify Token
                        </Button>
                        {/*<button className="btn btn-dark w-100" type="submit">Send Reset Link</button>*/}
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-4 text-center">
                <p className="mb-0">Wait, I remember my password... <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </ParticlesAuth>
  );
};

VerifyTokenPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(VerifyTokenPage);
