import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { UsersTable } from './Users';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const Users = () => {
  document.title = "Users | Appa Affiliates";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Users" pageTitle="Home" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Users Table</h5>
                </CardHeader>
                <CardBody>
                  <UsersTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Users;