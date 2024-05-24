import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Spinner } from 'reactstrap';

//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainer from '../../Components/Common/TableContainer';
import { getTransactionWallet, getTransationList } from "../../store/actions";
import moment from 'moment';

import {
    FromCol,
    ToCol,
    DetailsCol,
    TransactionID,
    TypeCol,
    Status
} from "./TransactionsCol";

const AllTransactions = () => {
    const dispatch = useDispatch();

    const [display, setDisplay] = useState(false);

    const { transactionWallet } = useSelector((state) => ({
        transactionWallet: state.Wallet.walletTransactions,
    }));

   /* const { wallet } = useSelector((state) => ({
        wallet: state.Wallet.wallet,
    })); */

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        dispatch(getTransactionWallet(obj.id));
        //dispatch(getWallet(obj.id));
    }, [dispatch]);


    useEffect(() => {
        console.log("TRANSACTION LIST:", transactionWallet);
        setTransation(transactionWallet);
    }, [transactionWallet]);

    useEffect(() => {
        setTimeout(() => {
          setDisplay(true)
        }, 3000);
      }, [])

    const [transation, setTransation] = useState(transactionWallet);

    const category = (e) => {
        if (e === "All") {
            var filter = transactionWallet.filter((item) => item.category !== e);
        } else {
            filter = transactionWallet.filter((item) => item.category === e);
        }
        setTransation(filter);
    };


    const flowType = (e) => {
        setTransation(
            transactionWallet.filter((item) => item.transaction_type === e));
    };


    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: "transaction_id",
                Cell: (row) => {
                  return <span>{row.value}</span>
                },
                disableFilters: true,
                filterable: false,
            },
            {
                Header: "Amount",
                accessor: "amount",
                Cell: (row) => {
                  return <span>₦{row.value}</span>
                },
                disableFilters: true,
                filterable: false,
            },
            {
                Header: "Date",
                accessor: "created_at",
                Cell: row => <span>{moment(row.created_at).format("YYYY-MM-DD HH:mm:ss")}</span>,
                disableFilters: true,
                filterable: false,
              },
            {
                Header: "Description",
                accessor: "description",
                Cell: (row) => {
                  return <span>{row.value}</span>
                },
                disableFilters: true,
                filterable: false,
            },
            {
                Header: "Type",
                accessor: "transaction_type",
                Cell: (row) => {
                    return <span className={row.value === 0 ? 'badge badge-soft-info p-2 text-capitalize' : 'badge badge-soft-primary p-2 text-capitalize'}>{row.value  === 0 ? "Withdrawal" : "Deposit"}</span>
                  },
                disableFilters: true,
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: (row) => {
                    return <span className={row.value === "success" ? 'badge badge-soft-success p-2 text-capitalize' : 'badge badge-soft-danger p-2 text-capitalize'}>{row.value}</span>
                  },
                disableFilters: true,
                filterable: false,
            },
        ],
        []
    );
    return (
        <React.Fragment>
            <Row className="align-items-center my-4 g-3">
                <Col sm={4}>
                    <div className="d-flex align-items-center gap-2">
                        <h5>Wallet Transacions</h5>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="d-flex gap-2">
                        <Link to="#" data-bs-toggle="modal" className="btn btn-info" onClick={() => flowType(1)}>Deposit</Link>
                        <Link to="#" data-bs-toggle="modal" className="btn btn-primary" onClick={() => flowType(0)}>Withdraw</Link>
                    </div>
                </div>
            </Row>

            <Card>
                <CardHeader>
                    <Row className="align-items-center g-3">
                        <Col md={3}>
                            <h5 className="card-title mb-0">All Transactions</h5>
                        </Col>
                        <div className="col-md-auto ms-auto">
                            <div className="d-flex gap-2">
                                <div className="search-box">
                                    <input type="text" className="form-control search" placeholder="Search for transactions..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </div>
                        </div>
                    </Row>
                </CardHeader>
                <CardBody className="py-0">
                    {typeof transation != 'undefined' && display ?
                        transation.length > 0 ?
                            <TableContainer
                                columns={columns}
                                data={(transation || [])}
                                isGlobalFilter={false}
                                isAddUserList={false}
                                customPageSize={5}
                                isPagination={transation > 5}
                                className="custom-header-css"
                                divClass="table-responsive table-card mb-4"
                                tablelass="align-middle table-nowrap mb-0"
                                theadClass="table-light table-nowrap"
                                thClass="table-light text-muted"
                            />
                            :
                            <div className="d-flex flex-column align-items-center w-100 py-4">
                                <i className={"ri-alert-fill display-1 text-xl text-warning"}></i>
                                <p className='text-muted'>No Data Found</p>
                            </div>
                        : 
                        <div className="text-center"><Spinner animation="border" variant="primary" /></div>
                    }          
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default AllTransactions;