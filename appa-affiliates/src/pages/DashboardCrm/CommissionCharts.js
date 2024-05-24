import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { BalanceOverviewCharts } from "./DashboardCrmCharts";
import { getBalanceOverviewChartsData } from '../../store/dashboardCRM/action';
import { getCommissionsChartData } from '../../store/actions';

const CommissionCharts = () => {
    const dispatch = useDispatch();

    const [chartData, setchartData] = useState([]);
    const [driversSum, setDriversSum] = useState(0);
    const [bussinessesSum, setBusinessesSum] = useState(0);
    const [usersSum, setUsersSum] = useState(0);

    const { commissionChartData } = useSelector(state => ({
        commissionChartData: state.Dashboard.commissionsOverviewData
    }));

    useEffect(() => {
        setchartData(commissionChartData.commissions_chart);
        setDriversSum(commissionChartData.commissions_dm_sum);
        setBusinessesSum(commissionChartData.commissions_biz_sum);
        setUsersSum(commissionChartData.commissions_user_sum);
    }, [commissionChartData]);

    const [seletedMonth, setSeletedMonth] = useState("Current Year");
    const onChangeChartPeriod = pType => {
        setSeletedMonth(pType);
        dispatch(getBalanceOverviewChartsData(pType));
    };

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        dispatch(getCommissionsChartData(obj.id));
    }, [dispatch]);
    
    return (
        <React.Fragment>
            <Col xxl={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Commissions Overview</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle className="text-reset dropdown-btn" tag="a" role="button">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">{seletedMonth.charAt(0).toUpperCase() + seletedMonth.slice(1)}<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem onClick={() => { onChangeChartPeriod("today"); }} className={seletedMonth === "today" ? "active" : ""}>Today</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastWeek"); }} className={seletedMonth === "lastWeek" ? "active" : ""}>Last Week</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastMonth"); }} className={seletedMonth === "lastMonth" ? "active" : ""}>Last Month</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("currentYear"); }} className={seletedMonth === "currentYear" ? "active" : ""}>Current Year</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>
                    <CardBody className="px-0">
                        <ul className="list-inline main-chart text-center mb-0">
                            <li className="list-inline-item chart-border-left me-0 border-0">
                                <h4 className="text-primary">₦{driversSum} <span className="text-muted d-inline-block fs-13 align-middle ms-2">Drivers</span></h4>
                            </li>
                            <li className="list-inline-item chart-border-left me-0">
                                <h4>₦{bussinessesSum}<span className="text-muted d-inline-block fs-13 align-middle ms-2">Businesses</span>
                                </h4>
                            </li>
                            <li className="list-inline-item chart-border-left me-0">
                                <h4>₦{usersSum}<span className="text-muted d-inline-block fs-13 align-middle ms-2">Users</span>
                                </h4>
                            </li>
                            <li className="list-inline-item chart-border-left me-0">
                                <h4><span data-plugin="counterup">{((bussinessesSum + driversSum + usersSum) /12).toFixed(2)} </span><span className="text-muted d-inline-block fs-13 align-middle ms-2">Avg Monthly Earnings</span></h4>
                            </li>
                        </ul>

                        <div id="revenue-expenses-charts" dir="ltr">
                            {typeof chartData !== 'undefined' ?
                                <BalanceOverviewCharts series={chartData} dataColors='["--vz-info", "--vz-primary", "--vz-danger"]' />
                                :
                               null
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default CommissionCharts;