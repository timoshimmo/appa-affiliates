import React, { useEffect } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import "swiper/css";
import "swiper/css/pagination";

const RatesWidgets = props => {

    return (
        <React.Fragment>
            {typeof props.ratesData != 'undefined' && props.ratesData != null ?
            (props.ratesData || []).map((rates, index) => (
                <Col xxl={3} md={4} key={index}>
                    <Card className="card-animate">
                      <CardBody>
                          <div className="d-flex mb-3">
                              <div className="flex-grow-1">
                                  <lord-icon
                                      src="https://cdn.lordicon.com/ofdfurqa.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "55px", height: "55px" }}>
                                  </lord-icon>
                              </div>
                              
                          </div>
                          <h3 className="mb-2">
                              <span className="counter-value">
                                   {rates.value}
                              </span>
                              <small className="text-muted fs-13">{rates.rate_type === "percentage" ? "%" : ".00"}</small></h3>
                          <h6 className="text-capitalize text-muted mb-0">{rates.user_type} Commission Rate</h6>
                      </CardBody>
                    </Card>
                </Col>              
            ))
            :
            null
            
            }
        </React.Fragment>
    );
};

export default RatesWidgets;