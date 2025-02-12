import React, { useEffect, useRef } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import "swiper/css";
import "swiper/css/pagination";
import { Player } from '@lordicon/react';
import dividendIcon from "../../assets/images/lottie/wired-outline-945-dividends-hover-pinch.json";

const RatesWidgets = props => {

    const dividendUserRef = useRef(null);
    const dividendDriverRef = useRef(null);
    const dividendBizRef = useRef(null);
      
    useEffect(() => {
        dividendUserRef.current?.playFromBeginning();
        dividendDriverRef.current?.playFromBeginning();
        dividendBizRef.current?.playFromBeginning();
    }, [])

    return (
        <React.Fragment>
            {typeof props.ratesData != 'undefined' && props.ratesData != null ?
            (props.ratesData || []).map((rates, index) => (
                <Col xxl={3} md={4} key={index}>
                    <Card className="card-animate">
                      <CardBody>
                          <div className="d-flex mb-3">
                              <div className="flex-grow-1">
                                <Player 
                                    ref={index == 0 ? dividendDriverRef : index == 1 ? dividendBizRef : dividendUserRef} 
                                    size={75}
                                    icon={ dividendIcon }
                                    onComplete={() => index == 0 ? dividendDriverRef.current?.playFromBeginning() : index == 1 ? dividendBizRef.current?.playFromBeginning() : dividendUserRef.current?.playFromBeginning()}
                                />
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