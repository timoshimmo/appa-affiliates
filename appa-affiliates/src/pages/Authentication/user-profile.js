import React, { useState, useEffect, Suspense } from "react";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
  Input,
  Form,
  CardHeader,
  Nav, 
  NavItem, 
  NavLink,
  TabContent, 
  TabPane,
  Spinner,
  Alert
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
import { editProfile, getProfile, resetProfileFlag, resetPasswordFlag } from "../../store/actions";
import { affiliateEditPassword } from "../../helpers/backend_helper";
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const [email, setemail] = useState("admin@gmail.com");
  //const [idx, setidx] = useState("1");

  //const [userName, setUserName] = useState("Admin");

  const [activeTab, setActiveTab] = useState("1");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passError, setPasswordError] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);


    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

  const { user, success, error, loading, editSuccess, editError } = useSelector(state => ({
    user: state.Profile.user.user,
    success: state.Profile.success,
    error: state.Profile.error,
    loading: state.Profile.loading,
    editError: state.Profile.editError,
    editSuccess: state.Profile.editSuccess,
  }));

  const passwordNotification = () => toast("Password Successfully Updated!", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white' });

  const handlePasswordUpdate = user => {

    setPasswordLoading(true);
    
    setTimeout(() => {
        
        try {
        
            const response = affiliateEditPassword(user);
            if (response.errors) {
              //console.log("EDIT PASSWORD ERR RESPONSE:", response.errors[0]);
              setPasswordError(true);
              //yield put(passwordError(response.errors[0].message));
            } else {
              //console.log("EDIT PROFILE SUCCESS RESPONSE:", response);
              setPasswordSuccess(true);
             // yield put(passwordSuccess(response));
            }
            setPasswordLoading(false);
        
          } catch (error) {
            //yield put(passwordError(error));
            //console.log("EDIT PASSWORD ERR RESPONSE:", error);
            setPasswordLoading(false);
            setPasswordError(true);
          }
    }, 3000);
    
  }

  
  useEffect(() => {
    //const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;

    //if (JSON.parse(sessionStorage.getItem("authUser"))) {
      
    //console.log("SUCCESS: ", success);

    if(editSuccess) {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        if (!isEmpty(user)) {
           // console.log("AUTH USER", JSON.stringify(user));
            obj.firstName = user?.f_name;
            obj.lastName = user?.l_name;
            sessionStorage.removeItem("authUser");
            sessionStorage.setItem("authUser", JSON.stringify(obj));
        }
        //window.location.reload();
    }

    if(passwordSuccess) {
        passwordNotification();
        dispatch(resetPasswordFlag());
    }
    

  }, [editSuccess, passwordSuccess, user]);

  useEffect(() => {

    const obj = JSON.parse(sessionStorage.getItem("authUser"));
    dispatch(getProfile(obj.token));
    if (!isEmpty(user)) {
        //console.log("AUTH USER", JSON.stringify(user));
        obj.firstName = user?.f_name;
        obj.lastName = user?.l_name;
        sessionStorage.removeItem("authUser");
        sessionStorage.setItem("authUser", JSON.stringify(obj));
    }

  }, [dispatch]);


  const validation = useFormik({
    
    initialValues: {
      f_name: user?.f_name || '',
      l_name: user?.l_name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    },
    
    validationSchema: Yup.object({
      f_name: Yup.string().required("Please Enter Your First Name"),
      l_name: Yup.string().required("Please Enter Your Last Name"),
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
        //console.log("Submit Profile!");
        
    },

    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
  });

  const passValidation = useFormik({

        enableReinitialize: true,

        initialValues: {
            email: user?.email || '',
            old_password: '',
            password: '',
            confirm_password: ''
        },

        validationSchema: Yup.object({
            old_password: Yup.string()
                .min(6, 'Old Password must be at least 6 characters')
                .required('Old Password is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required')
        }),

        onSubmit: (values, {resetForm}) => {
           // if(formSubmitted === 2) {
               // dispatchOne(editPassword(values));
            //}
            handlePasswordUpdate(values);
            resetForm();
           // console.log("Submit Password!" + user?.email);
        }

  });

  const onDismiss = () => {
    dispatch(resetProfileFlag());

}

  const onDismissPass = () => {
    dispatch(resetPasswordFlag());

}

  /*

onSubmit={(e) => {
    e.preventDefault();
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === "btnUpdateProfile") validation.handleSubmit();
    return false;
}}
  */

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
                          
                            
                                
                                <div className="w-100 d-flex flex-column align-items-center text-center">
                                    {user?.f_name  ?
                                        <>
                                            <h5 className="fs-16 mb-1">{user?.f_name + " " + user?.l_name}</h5>
                                            <p className="text-muted mb-0">{user?.ref_code || ""}</p>
                                        </>
                                        :
                                        <div className="w-50 text-center">
                                            <Skeleton count={2} />
                                        </div>
                                    }
                                </div>
                               
                            
                            
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
                                <div className="my-2">
                                    {editError && editError ? (<Alert color="danger" toggle={onDismiss}> Error updating your profile. Pls try again </Alert>) : null}
                                </div>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="firstnameInput" className="form-label">First
                                                    Name</Label>
                                                <Input type="text" className="form-control" id="firstnameInput"
                                                    name="f_name"
                                                    placeholder="Enter your firstname" 
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.f_name || ""}
                                                    />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="lastnameInput" className="form-label">Last
                                                    Name</Label>
                                                <Input type="text" className="form-control" id="lastnameInput"
                                                    name="l_name"
                                                    placeholder="Enter your lastname" 
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.l_name || ""}
                                                    />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                    Number</Label>
                                                <Input type="text" className="form-control"
                                                    id="phonenumberInput"
                                                    name="phone"
                                                    placeholder="Enter your phone number"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.phone || ""}
                                                    />

                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Email
                                                    Address</Label>
                                                <Input type="email" className="form-control" id="emailInput"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ""} 
                                                    />
                                            </div>
                                        </Col>
                                        
                                        
                                        <Col lg={12}>
                                            <div className="hstack gap-2 justify-content-end">
                                                {/*<button type="button"
                                                    className="btn btn-dark">Save</button> */}
                                                <Button name="btnUpdateProfile" color="dark" disabled={editError ? false : loading ? true : false} className="btn btn-dark" type="button" onClick={()=> { validation.handleSubmit()}}>
                                                    {editError ? false : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                    Save
                                                </Button>
                                                <button type="button"
                                                    className="btn btn-warning" onClick={() => navigate(-1)}>Cancel</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </TabPane>
                                {/*
                                    onSubmit={(e) => {
                                    e.preventDefault();
                                    const buttonName = e.nativeEvent.submitter.name;
                                    if (buttonName === "changePassword") passValidation.handleSubmit();
                                    return false;
                                  }}

                                */}
                            <TabPane tabId="2">
                                <div className="my-2">
                                    {passError && passError ? (<Alert color="danger" toggle={onDismissPass}> Error updating your password. Pls Re-type your details and try again </Alert>) : null}
                                </div>
                                <Form>
                                    <Row className="g-2">
                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="oldpasswordInput" className="form-label">Old
                                                    Password*</Label>
                                                <Input type="password" className="form-control"
                                                    id="oldpasswordInput"
                                                    name="old_password"
                                                    placeholder="Enter current password" 
                                                    onChange={passValidation.handleChange}
                                                    onBlur={passValidation.handleBlur}
                                                    value={passValidation.values.old_password || ""}
                                                    invalid={
                                                        passValidation.touched.old_password && passValidation.errors.old_password ? true : false
                                                    }
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="newpasswordInput" className="form-label">New
                                                    Password*</Label>
                                                <Input type="password" className="form-control"  name="password"
                                                    id="newpasswordInput" placeholder="Enter new password" 
                                                    onChange={passValidation.handleChange}
                                                    onBlur={passValidation.handleBlur}
                                                    value={passValidation.values.password || ""}
                                                    invalid={
                                                        passValidation.touched.password && passValidation.errors.password ? true : false
                                                    }
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="confirmpasswordInput" className="form-label">Confirm
                                                    Password*</Label>
                                                <Input type="password" className="form-control" name="confirm_password"
                                                    id="confirmpasswordInput"
                                                    placeholder="Confirm password" 
                                                    onChange={passValidation.handleChange}
                                                    onBlur={passValidation.handleBlur}
                                                    value={passValidation.values.confirm_password || ""}
                                                    invalid={
                                                        passValidation.touched.confirm_password && passValidation.errors.confirm_password ? true : false
                                                    }
                                                />
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
                                                <Button name="changePassword" color="dark" disabled={passwordLoading ? true : false} className="btn btn-dark" type="button" onClick={()=> { passValidation.handleSubmit() }}>
                                                    {passwordLoading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                    Change Password
                                                </Button>
                                            {/*<div className="text-end">
                                                <button type="button" className="btn btn-info">Change
                                                    Password</button>
                                                </div> */}
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
            <ToastContainer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
