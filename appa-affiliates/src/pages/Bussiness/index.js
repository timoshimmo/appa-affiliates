import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { BusinessTable } from './Business';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const Business = () => {
  document.title = " Business | Appa Affiliates";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Business" pageTitle="Home" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Business Table</h5>
                </CardHeader>
                <CardBody>
                  <BusinessTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Business;