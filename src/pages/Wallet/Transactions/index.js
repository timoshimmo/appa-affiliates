import React, { useEffect, useState } from 'react';
import { 
    Container, 
    Row, 
    Button, 
    Modal,
    Alert,
    ModalBody,
    ModalHeader, 
    Label,
    Spinner,
    Input,
    Col
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Select from "react-select";
import Widgets from './Widgets';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getWallet } from "../../../store/actions";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { affiliateGetBankList, affiliateWithdrawWallet, affiliateDepositWallet } from '../../../helpers/backend_helper';
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transactions = () => {
    document.title = "Wallet | Appa Affiliates";

    const dispatch = useDispatch();

    const obj = JSON.parse(sessionStorage.getItem("authUser"));

    const [isWithdraw, setIsWithdraw] = useState(false);
    const [isDeposit, setIsDeposit] = useState(false);
    const [withdrawError, setWithdrawError] = useState(false);
    const [banks, setBanks] = useState([]);

    const [withdrawLoading, setWithdrawLoading] = useState(false);
    const [depositLoading, setDepositLoading] = useState(false);

    const [banksError, setBanksError] = useState(false);

    const [errMessage, setErrMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //const [successMessage, setSuccessMessage] = useState("");

    const toggleWithdraw = () => setIsWithdraw(!isWithdraw);
    const toggleDeposit = () => setIsDeposit(!isDeposit);

    const withdrawalNotification = msg => toast(msg, { position: "top-right", hideProgressBar: false, className: 'bg-success text-white' });
    const depositNotification = msg => toast(msg, { position: "top-right", hideProgressBar: false, className: 'bg-success text-white' });
    const reload=()=>window.location.reload();


    const { wallet } = useSelector((state) => ({
        wallet: state.Wallet.wallet,
    }));

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        dispatch(getWallet(obj.id));
    }, [dispatch]);

    useEffect(() => {
        //console.log("MY WALLET: ", wallet);
        setWalletData(wallet);
        handleGetBankList();
    }, [wallet]);


    const [walletData, setWalletData] = useState(wallet);
/*
    const config = {
        public_key: 'FLWPUBK-296ac62adb9626cff323197e75d8808b-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
           phone_number: '070********',
          name: 'john doe',
        },
        customizations: {
          title: 'Wallet Transaction',
          description: 'Transfer money from wallet to account',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
  

    const handleFlutterPayment = useFlutterwave(config);

   const handleFlwPayment = () => {
        const initializePayment = useFlutterwave(config);

        initializePayment(onSuccess, onClose);
    }
*/

const validation = useFormik({

    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    
    initialValues: {
      affiliate_id: obj.id,
      account_number: '',
      bank_code: {},
      withdraw_amount: 0,
      description: '',
    },
    
    validationSchema: Yup.object({
      account_number: Yup.string().required("Please Enter Your Account Number"),
      bank_code: Yup.object().required("Please Select a Bank"),
      withdraw_amount: Yup.string()
      .required('Please Enter An Amount'),
      description: Yup.string()
      .required('Please Enter A Description'),
    }),
    onSubmit: (values, { resetForm }) => {
        handleWithdrawWallet(values);
        resetForm();
        
    },
  });


  const depositValidation = useFormik({

    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    
    initialValues: {
      affiliate_id: obj.id,
      deposit_amount: 0,
      deposit_description: '',
    },
    
    validationSchema: Yup.object({
      deposit_amount: Yup.string()
      .required('Please Enter An Amount'),
      deposit_description: Yup.string()
      .required('Please Enter A Description'),
    }),
    onSubmit: (values, { resetForm }) => {
        handleDepositWallet(values);
        resetForm();
        
    },
  });

 const handleGetBankList = () => {

        try {
        
            const response = affiliateGetBankList();

            response.then(result => {
                if (result.errors) {
                    setBanksError(true);
                }
                setBanks(result);
            });

        } catch (error) {
            //yield put(passwordError(error));
            //console.log("EDIT PASSWORD ERR RESPONSE:", error);
            setBanksError(true);
          }

    }

    const handleWithdrawWallet = (values) => {

        setWithdrawLoading(true);

        setTimeout(() => {

            try {
                const response = affiliateWithdrawWallet(values);
                
                response.then(result => {
                    if (result.errors) {
                        setWithdrawLoading(false);
                        setWithdrawError(true);
                        setErrMessage(result.errors[0].message);
                    }
                    else {
                        //console.log("WITHDRAWAL:", result.message);
                        setWithdrawLoading(false);
                        withdrawalNotification(result.message);
                    }
                   
                });
                
    
            } catch (error) {
                //yield put(passwordError(error));
                console.log("WITHDRAWAL ERROR:", error);
                setWithdrawError(true);
                setWithdrawLoading(false);
              }

        }, 3000);

    }

    const handleDepositWallet = (values) => {

        setDepositLoading(true);

        setTimeout(() => {

            try {
                const response = affiliateDepositWallet(values);
                
                response.then(result => {
                    if (result.errors) {
                        setDepositLoading(false);
                        setErrorMessage(result.errors[0].message);
                    }
                    else {
                        setDepositLoading(false);
                        depositNotification(result.message);
                    }
                   
                });
                
    
            } catch (error) {
                console.log("DEPOSIT ERROR:", error);
                //setErrorMessage(error);
                setDepositLoading(false);
              }

        }, 3000);

    }

    const onDismiss = () => {
        validation.resetForm();
    }

    const onDismissDepositError = () => {
        depositValidation.resetForm();
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Wallet" pageTitle="Transactions" />
                    {Object.keys(wallet).length < 1 ?
                        <div className="w-100 d-flex pt-2 pb-4 justify-content-end">
                                <div className="d-flex gap-2">
                                    <Link to="/create-wallet" data-bs-toggle="modal" className="btn btn-dark">Create Wallet</Link>
                                </div>
                        </div>
                        :
                        <div className="w-100 d-flex pt-2 pb-4 justify-content-end">
                                <div className="d-flex gap-2">
                                    <Button color="primary" className="btn bg-warning" type="button" 
                                            onClick={toggleDeposit}
                                        >
                                            Add Money
                                        </Button>
                                        {/*<Link to="/create-wallet" data-bs-toggle="modal" className="btn btn-dark">Withdraw</Link>*/}
                                    <Button color="dark" className="btn btn-dark" type="button" 
                                        onClick={toggleWithdraw}>
                                        Withdraw Money
                                    </Button>
                                </div>
                        </div>
                    }
                   
                    <Row>
                        <Widgets data={walletData}/>
                    </Row>
                    {/* <AllTransactions /> */}
                </Container>
            </div>
            <Modal
                isOpen={isWithdraw}
                toggle={toggleWithdraw}
                centered={true}
                size="lg"
                onClosed={reload}
            >
                <ModalHeader 
                    className="p-3 text-uppercase"
                    toggle={toggleWithdraw}
                >
                    Transfer To Bank Account
                </ModalHeader>
                <form className="checkout-tab" action="#">
                    <ModalBody className="p-4">
                        {withdrawError && errMessage ? (<Alert color="danger" toggle={onDismiss}> {errMessage} </Alert>) : null}
                       
                        <div className="modal-body">
                            <Row className="g-3">
                                <Col lg={6}>
                                    <div>
                                        <Label for="accountNo" className="form-label">
                                            Account Number
                                        </Label>
                                        <Input
                                            name="account_number"
                                            type="text"
                                            className="form-control"
                                            id="accountNo"
                                            placeholder="Enter your account number"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.account_number || ""}
                                            invalid={
                                                validation.touched.account_number && validation.errors.account_number ? true : false
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                    <Label for="country-select" className="form-label">
                                        Bank Name
                                    </Label>
                                    <Select
                                        name="bank_code"
                                        className="mb-0"
                                        value={validation.values.bank_code}
                                        onChange={selectedOption => {
                                            let event = {target: {name: 'bank_code', value: selectedOption}}
                                            validation.handleChange(event)
                                          }}
                                        onBlur={() => {
                                            validation.handleBlur({target: {name: 'bank_code'}});
                                          }}
                                        options={
                                            banks.length > 0 &&
                                                banks.map((item, index) => {
                                                    return {
                                                        label: item.name,
                                                        value: item.code,
                                                        key: index
                                                    }

                                                })
                                        }
                                        id="bank-select"
                                        invalid={
                                            validation.touched.bank_code && validation.errors.bank_code ? true : false
                                        }
                                    ></Select> 
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                    <Label for="withdraw_amount" className="form-label">
                                        Amount
                                    </Label>
                                    <Input
                                        name="withdraw_amount"
                                        type="number"
                                        className="form-control"
                                        id="withdraw_amount"
                                        placeholder="Enter the amount"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.withdraw_amount || ""}
                                        invalid={
                                            validation.touched.withdraw_amount && validation.errors.withdraw_amount ? true : false
                                        }
                                    />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                    <Label for="description" className="form-label">
                                        Description
                                    </Label>
                                    <Input
                                        name="description"
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        placeholder="Enter a description"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.description || ""}
                                        invalid={
                                            validation.touched.description && validation.errors.description ? true : false
                                        }
                                    />
                                    </div>
                                </Col>
                                
                                
                                <Col lg={12}>
                                    <div className="d-flex align-items-start gap-3 mt-3">
                                    <Button
                                        onClick={() => {
                                            validation.handleSubmit()
                                        }}
                                        type="button"
                                        className="btn btn-warning btn-label right ms-auto nexttab"
                                        disabled={withdrawLoading ? true : false}
                                    >
                                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>{" "}
                                        {withdrawLoading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                        Send
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
            <Modal
                isOpen={isDeposit}
                toggle={toggleDeposit}
                centered={true}
                size="lg"
                onClosed={reload}
            >
                 <ModalHeader 
                    className="p-3 text-uppercase"
                    toggle={toggleDeposit}
                >
                    Add Funds To Wallet
                </ModalHeader>
                <form className="checkout-tab" action="#">
                    <ModalBody className="p-4">
                        {errorMessage && errorMessage ? (<Alert color="danger" toggle={onDismissDepositError}> {errorMessage} </Alert>) 
                        : 
                        <Alert color="info">Funds are only added from earned commissions</Alert>
                        }
                        
                        <div className="modal-body">
                            <Row className="g-3">
                                <Col lg={6}>
                                    <div>
                                        <Label for="deposit_amount" className="form-label">
                                            Amount
                                        </Label>
                                        <Input
                                            name="deposit_amount"
                                            type="text"
                                            className="form-control"
                                            id="deposit_amount"
                                            placeholder="Enter an amount"
                                            onChange={depositValidation.handleChange}
                                            onBlur={depositValidation.handleBlur}
                                            value={depositValidation.values.deposit_amount || ""}
                                            invalid={
                                                depositValidation.touched.account_number && depositValidation.errors.account_number ? true : false
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                    <Label for="deposit_description" className="form-label">
                                        Description
                                    </Label>
                                    <Input
                                        name="deposit_description"
                                        type="text"
                                        className="form-control"
                                        id="deposit_description"
                                        placeholder="Enter a description"
                                        onChange={depositValidation.handleChange}
                                        onBlur={depositValidation.handleBlur}
                                        value={depositValidation.values.deposit_description || ""}
                                        invalid={
                                            depositValidation.touched.deposit_description && depositValidation.errors.deposit_description ? true : false
                                        }
                                    />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="d-flex align-items-start gap-3 mt-3">
                                    <Button
                                        onClick={() => {
                                            depositValidation.handleSubmit()
                                        }}
                                        type="button"
                                        className="btn btn-warning btn-label right ms-auto nexttab"
                                        disabled={depositLoading ? true : false}
                                    >
                                        <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>{" "}
                                        {depositLoading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                        Add Funds
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
            <ToastContainer />
        </React.Fragment>
    );
};

export default Transactions;