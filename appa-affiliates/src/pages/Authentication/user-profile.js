import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
  CardHeader,
  Nav, 
  NavItem, 
  NavLink,
  TabContent, 
  TabPane
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import classnames from "classnames";

//redux
import { useSelector, useDispatch } from "react-redux";

//import avatar from "../../assets/images/users/avatar-1.jpg";
import avatar from "../../assets/images/users/user-dummy-img.jpg";
import avatar1 from "../../assets/images/users/user-dummy-img.jpg";
// actions
import { editProfile, getProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState("admin@gmail.com");
  const [idx, setidx] = useState("1");

  const [userName, setUserName] = useState("Admin");

  const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

  const { user, success, error } = useSelector(state => ({
    user: state.Profile.user.user,
    success: state.Profile.success,
    error: state.Profile.error
  }));

  useEffect(() => {
    //const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;

    if (JSON.parse(sessionStorage.getItem("authUser"))) {
      
        //console.log("SUCCESS: ", success);
        const obj = JSON.parse(sessionStorage.getItem("authUser"));

        console.log("USER: ", obj);

      dispatch(getProfile(obj.token));

     if (!isEmpty(user)) {

        console.log("AUTH USER", JSON.stringify(user));
        obj.f_name = user.f_name;
        sessionStorage.removeItem("authUser");
        sessionStorage.setItem("authUser", JSON.stringify(obj));
      }

      //console.log("AUTH USER", JSON.stringify(obj));
      const name = obj.firstName + " " + obj.lastName;

      setUserName(name);
      setemail(obj.email);
     // setidx(obj._id || "1");

      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, []);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      first_name: user?.f_name || '',
      last_name: user?.l_name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Enter Your First Name"),
      last_name: Yup.string().required("Please Enter Your Last Name"),
      email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
      phone: Yup.string()
      .matches(/^\+?\d{6,15}$/, {
          message: "Invalid phone number"
        })
      .required('Please enter your phone number'),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });

  document.title = "Appa Affiliates | Profile";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/*

              <Row>
                <Col lg="12">
                  {error && error ? <Alert color="danger">{error}</Alert> : null}
                  {success ? <Alert color="success">Username Updated To {userName}</Alert> : null}

                  <Card>
                    <CardBody>
                      <div className="d-flex">
                        <div className="mx-3">
                          <img
                            src={avatar}
                            alt=""
                            className="avatar-md rounded-circle img-thumbnail"
                          />
                        </div>
                        <div className="flex-grow-1 align-self-center">
                          <div className="text-muted">
                            <h5>{userName || "Admin"}</h5>
                            <p className="mb-1">Email Id : {email}</p>
                            <p className="mb-0">Id No : #{idx}</p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>  

          */}
          
          <Row>
              <Col xxl={3}>
                <Card className="mt-1">
                    <CardBody className="p-4">
                        <div className="text-center">
                            <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                <img src={avatar1}
                                    className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                    alt="user-profile" />
                                <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                    <Input id="profile-img-file-input" type="file"
                                        className="profile-img-file-input" />
                                    <Label htmlFor="profile-img-file-input"
                                        className="profile-photo-edit avatar-xs">
                                        <span className="avatar-title rounded-circle bg-light text-body">
                                            <i className="ri-camera-fill"></i>
                                        </span>
                                    </Label>
                                </div>
                            </div>
                            <h5 className="fs-16 mb-1">{userName}</h5>
                            <p className="text-muted mb-0">{email}</p>
                        </div>
                    </CardBody>
                </Card>
            {/*
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-5">
                            <div className="flex-grow-1">
                                <h5 className="card-title mb-0">Complete Your Profile</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <Link to="#" className="badge bg-light text-primary fs-12"><i
                                    className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                            </div>
                        </div>
                        <div className="progress animated-progress custom-progress progress-label">
                            <div className="progress-bar bg-info" role="progressbar" style={{ "width": "30%" }}
                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                <div className="label">30%</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center mb-4">
                            <div className="flex-grow-1">
                                <h5 className="card-title mb-0">Portfolio</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <Link to="#" className="badge bg-light text-primary fs-12"><i
                                    className="ri-add-fill align-bottom me-1"></i> Add</Link>
                            </div>
                        </div>
                        <div className="mb-3 d-flex">
                            <div className="avatar-xs d-block flex-shrink-0 me-3">
                                <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                    <i className="ri-github-fill"></i>
                                </span>
                            </div>
                            <Input type="email" className="form-control" id="gitUsername" placeholder="Username"
                                defaultValue="@daveadame" />
                        </div>
                        <div className="mb-3 d-flex">
                            <div className="avatar-xs d-block flex-shrink-0 me-3">
                                <span className="avatar-title rounded-circle fs-16 bg-primary">
                                    <i className="ri-global-fill"></i>
                                </span>
                            </div>
                            <Input type="text" className="form-control" id="websiteInput"
                                placeholder="www.example.com" defaultValue="www.velzon.com" />
                        </div>
                        <div className="mb-3 d-flex">
                            <div className="avatar-xs d-block flex-shrink-0 me-3">
                                <span className="avatar-title rounded-circle fs-16 bg-success">
                                    <i className="ri-dribbble-fill"></i>
                                </span>
                            </div>
                            <Input type="text" className="form-control" id="dribbleName" placeholder="Username"
                                defaultValue="@dave_adame" />
                        </div>
                        <div className="d-flex">
                            <div className="avatar-xs d-block flex-shrink-0 me-3">
                                <span className="avatar-title rounded-circle fs-16 bg-danger">
                                    <i className="ri-pinterest-fill"></i>
                                </span>
                            </div>
                            <Input type="text" className="form-control" id="pinterestName"
                                placeholder="Username" defaultValue="Advance Dave" />
                        </div>
                    </CardBody>
                </Card> */}
            </Col> 

            <Col xxl={9}>
                <Card className="mt-xxl-n5">
                    <CardHeader>
                        <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                            role="tablist">
                            <NavItem>
                                <NavLink
                                    to="#"
                                    className={classnames({ active: activeTab === "1" })}
                                    onClick={() => {
                                        tabChange("1");
                                    }}
                                    type="button">
                                    Personal Details
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"
                                    className={classnames({ active: activeTab === "2" })}
                                    onClick={() => {
                                        tabChange("2");
                                    }}
                                    type="button">
                                    Change Password
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody className="p-4">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="firstnameInput" className="form-label">First
                                                    Name</Label>
                                                <Input type="text" className="form-control" id="firstnameInput"
                                                    placeholder="Enter your firstname" 
                                                    value={validation.values.first_name || ""}  
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="lastnameInput" className="form-label">Last
                                                    Name</Label>
                                                <Input type="text" className="form-control" id="lastnameInput"
                                                    placeholder="Enter your lastname" value={validation.values.last_name || ""} 
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                    Number</Label>
                                                <Input type="text" className="form-control"
                                                    id="phonenumberInput"
                                                    placeholder="Enter your phone number"
                                                    value={validation.values.phone || ""} 
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    />

                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Email
                                                    Address</Label>
                                                <Input type="email" className="form-control" id="emailInput"
                                                    placeholder="Enter your email"
                                                    value={validation.values.email || ""} 
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    />
                                            </div>
                                        </Col>
                                        
                                        
                                        <Col lg={12}>
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button"
                                                    className="btn btn-dark">Save</button>
                                                <button type="button"
                                                    className="btn btn-warning" onClick={() => navigate(-1)}>Cancel</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </TabPane>

                            <TabPane tabId="2">
                                <Form>
                                    <Row className="g-2">
                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="oldpasswordInput" className="form-label">Old
                                                    Password*</Label>
                                                <Input type="password" className="form-control"
                                                    id="oldpasswordInput"
                                                    placeholder="Enter current password" />
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="newpasswordInput" className="form-label">New
                                                    Password*</Label>
                                                <Input type="password" className="form-control"
                                                    id="newpasswordInput" placeholder="Enter new password" />
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="confirmpasswordInput" className="form-label">Confirm
                                                    Password*</Label>
                                                <Input type="password" className="form-control"
                                                    id="confirmpasswordInput"
                                                    placeholder="Confirm password" />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Link to="#"
                                                    className="link-primary text-decoration-underline">Forgot
                                                    Password ?</Link>
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="text-end">
                                                <button type="button" className="btn btn-info">Change
                                                    Password</button>
                                            </div>
                                        </Col>

                                    </Row>

                                </Form>
                               
                                
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>

{/*
          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <Form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="form-group">
                  <Label className="form-label">User Name</Label>
                  <Input
                    name="first_name"
                    // value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.first_name || ""}
                    invalid={
                      validation.touched.first_name && validation.errors.first_name ? true : false
                    }
                  />
                  {validation.touched.first_name && validation.errors.first_name ? (
                    <FormFeedback type="invalid">{validation.errors.first_name}</FormFeedback>
                  ) : null}
                  <Input name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
