import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper";

const ValueWidgets = props => {

    return (
        <React.Fragment>
            <Col xxl={4} md={6}>
                <Card className="card-animate bg-soft-info">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon
                                    src="https://cdn.lordicon.com/qmsejndz.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "55px", height: "55px" }}>
                                </lord-icon>
                            </div>
                            
                        </div>
                        <h3 className="mb-2">
                            <span key={props.valuesData.commission_balance} className="counter-value">
                                <CountUp start={0} end={props.valuesData.commission_balance || 0} separator="," prefix="₦" duration={3} />
                            </span>
                            <small className="text-muted fs-13">.00</small></h3>
                        <h6 className="text-muted mb-0">Commission Balance</h6>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={4} md={6}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon src="https://cdn.lordicon.com/kndkiwmf.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "55px", height: "55px" }}></lord-icon>
                            </div>
                        </div>
                        <h3 className="mb-2">
                            <span key={props.valuesData.total_commissions} className="counter-value">
                                <CountUp start={0} end={props.valuesData.total_commissions || 0} separator="," prefix="₦" duration={3} />
                            </span>
                            <small className="text-muted fs-14">.00</small></h3>
                        <h6 className="text-muted mb-0">Total Commission Earned</h6>
                    </CardBody>
                </Card>
            </Col>
            
        </React.Fragment>
    );
};

export default ValueWidgets;