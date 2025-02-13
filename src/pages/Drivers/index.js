import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { DriversTable } from './Drivers';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const Drivers = () => {
  document.title = " Drivers | Appa Affiliates";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Drivers" pageTitle="Home" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Drivers Table</h5>
                </CardHeader>
                <CardBody>
                  <DriversTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Drivers;