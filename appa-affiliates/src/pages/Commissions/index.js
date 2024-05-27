import React, { useEffect, useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row, Spinner } from 'reactstrap'
import { CommissionsTable } from './CommissionsTable';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import RatesWidgets from './RatesWidgets';
import ValueWidgets from './ValueWidgets';
import { useSelector, useDispatch } from "react-redux";
import { getCommissionsData } from '../../store/actions';


const Commissions = () => {
  document.title = " Commissions | Appa Affiliates";

  const dispatch = useDispatch();

  const [tableData, settableData] = useState([]);
  const [ratesData, setRatesData] = useState([]);
  const [valuesData, setValuesData] = useState([]);

  const { commissionsData } = useSelector((state) => ({
    commissionsData: state.Commissions.commissionsData,
  }));

useEffect(() => {
  if(typeof commissionsData != 'undefined') {
    settableData(commissionsData.commissions);
    setRatesData(commissionsData.rates);
    //setValuesData(commissionsData.values);
    console.log("COMMISSIONS TABLE DATA: ", commissionsData.commissions);
  }
 
}, [commissionsData]);

useEffect(() => {
  const obj = JSON.parse(sessionStorage.getItem("authUser"));
  dispatch(getCommissionsData(obj.id));
}, [dispatch]);


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Commissions" pageTitle="Home" />
            <Row>
                <RatesWidgets ratesData={ratesData}/>
            </Row>
            <Row>
                <ValueWidgets valuesData={commissionsData.values}/>
            </Row>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardHeader>
                    <h5 className="card-title mb-0">Earned Commissions</h5>
                  </CardHeader>
                  <CardBody>
                    <CommissionsTable tableData={tableData}/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
           
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Commissions;