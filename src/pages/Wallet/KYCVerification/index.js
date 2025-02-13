import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import KYC from './KYCVerification';

const KYCVerification = () => {
    document.title = "Wallet | Appa Affiliates";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Wallet Creation" pageTitle="Wallet" />
                    <Row>
                        <KYC />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default KYCVerification;