import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getCommissionsTableData } from '../../store/actions';
import moment from 'moment';

const CommissionsTable = () => {

    const dispatch = useDispatch();

    const [tableData, settableData] = useState([]);

    const { commissionsTableData } = useSelector((state) => ({
        commissionsTableData: state.Dashboard.commissionsTableData,
    }));

    useEffect(() => {
        settableData(commissionsTableData);
    }, [commissionsTableData]);

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        dispatch(getCommissionsTableData(obj.id));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Col xxl={7}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Commissions</h4>
                       {/*
                            <div className="flex-shrink-0">
                                <UncontrolledDropdown className="card-header-dropdown">
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                        <span className="text-muted">02 Nov 2021 to 31 Dec 2021<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Today</DropdownItem>
                                        <DropdownItem>Last Week</DropdownItem>
                                        <DropdownItem>Last Month</DropdownItem>
                                        <DropdownItem>Current Year</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        */}               
                    </CardHeader>

                    <CardBody>
                        <div className="table-responsive table-card">
                            {typeof tableData !== 'undefined' &&
                                tableData.length > 0 ?
                                <table className="table table-borderless table-hover table-nowrap align-middle mb-0">
                                    <thead className="table-light">
                                        <tr className="text-muted">
                                            <th scope="col">Client</th>
                                            <th scope="col" style={{ width: "25%" }}>Created At</th>
                                            <th scope="col" style={{ width: "35%" }}>Client Category</th>
                                            <th scope="col" style={{ width: "10%" }}>Amount</th>
                                        </tr>
                                    </thead>
                                
                                    <tbody>
                                        {(tableData || []).map((item, index) => (
                                            <tr key={index}>
                                                <td><img src={item.rate_id === "1" ? "https://ngr.appastore.co/public/assets/admin/img/160x160/img1.jpg" : item.rate_id === "2" ? "https://ngr.appastore.co/storage/store/"+item.business.cover_photo : "https://ngr.appastore.co/storage/store/"+item.user.image} alt="" className="avatar-xs rounded-circle me-2" />
                                                    <Link to="#" className="text-body fw-medium">{item.rate_id === "1" ? item.delivery_man.f_name + " " + item.delivery_man.l_name : item.rate_id === "2" ? item.business.name : item.user.f_name + " " + item.user.l_name}</Link></td>
                                                <td>{moment(item.created_at).format("YYYY-MM-DD")}</td>
                                                <td><span className={item.rate_id === "1" ? 'badge badge-soft-info p-2' : item.rate_id === "2" ? 'badge badge-soft-primary p-2' : 'badge badge-soft-danger p-2'}>{item.rate_id === "1" ? "Drivers" : item.rate_id === "2" ? "Businesses" : "Customer"}</span></td>
                                                <td>₦{item.amount}</td>
                                            </tr>
                                        ))}
                                    
                                    </tbody>    
                                </table>
                                : 
                                <div className="d-flex flex-column align-items-center w-100 py-4">
                                    <i className={"ri-alert-fill display-1 text-xl text-warning"}></i>
                                    <p className='text-muted'>No Data Found</p>
                                </div>
                                   
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default CommissionsTable;