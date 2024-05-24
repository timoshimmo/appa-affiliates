import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AllTransactions from './AllTransactions';

const Transactions = () => {
    document.title = "Transactions | Appa Affiliates";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Transactions" pageTitle="Home" />
                    <AllTransactions />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Transactions;