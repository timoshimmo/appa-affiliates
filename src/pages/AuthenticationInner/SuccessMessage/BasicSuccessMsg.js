import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ParticlesAuth from "../ParticlesAuth";

//import images
import logoLight from "../../../assets/images/logo-light.png";
import appaLogoLight from "../../../assets/images/appa_store_logo_orange_cropped.png";

const BasicSuccessMsg = () => {
    document.title = "Appa Affiliates | Success Message";
    return (
        <React.Fragment>
            <div className="auth-page-wrapper">
                <ParticlesAuth>
                    <div className="auth-page-content">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                                        <div>
                                            <Link to="/dashboard" className="d-inline-block auth-logo">
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
                                        <CardBody className="p-4 text-center">
                                            <div className="avatar-lg mx-auto mt-2">
                                                <div className="avatar-title bg-light text-success display-3 rounded-circle">
                                                    <i className="ri-checkbox-circle-fill"></i>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2">
                                                <h4>Congratulations !</h4>
                                                <p className="text-muted mx-4">Successful registration, Pls check your email and click on the link to verify your account.</p>
                                                <div className="mt-4">
                                                    <Link to="/login" className="btn btn-dark w-100">Back to Login</Link>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ParticlesAuth>
            </div>
        </React.Fragment >
    );
};

export default BasicSuccessMsg;