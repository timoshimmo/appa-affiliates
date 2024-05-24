import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
//import BalanceOverview from './BalanceOverview';
//import ClosingDeals from './ClosingDeals';
//import DealsStatus from './DealsStatus';
import CommissionsTable from './CommissionsTable';
//import DealType from './DealType';
//import MyTasks from './MyTasks';
//import SalesForecast from './SalesForecast';
//import UpcomingActivities from './UpcomingActivities';
import Widgets from './Widgets';
import CommissionCharts from './CommissionCharts';

const DashboardCrm = () => {
    document.title = "Appa Affiliates | Dashboard";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Overview" pageTitle="Dashboards" />
                    <Row>
                        <Widgets />
                    </Row>
                       
                    <Row>
                        <CommissionCharts />
                    </Row>
                    <Row>
                        <CommissionsTable />
                    </Row>

                    {/*
                        <Row>
                            <SalesForecast />
                            <DealType />
                            <BalanceOverview />
                            <UpcomingActivities /> 
                            <ClosingDeals />
                            <MyTasks />
                        </Row>
                */}
                
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrm;