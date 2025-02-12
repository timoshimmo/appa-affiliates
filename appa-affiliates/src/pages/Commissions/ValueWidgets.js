import React, { useEffect, useRef } from 'react';
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper";
import { Player } from '@lordicon/react';
import coinsIcon from "../../assets/images/lottie/wired-outline-298-coins-hover-jump.json";
import salesIcon from "../../assets/images/lottie/wired-outline-1339-sale-hover-pinch.json";

const ValueWidgets = props => {

    const coinsRef = useRef(null);
    const salesRef = useRef(null);
    
    useEffect(() => {
        coinsRef.current?.playFromBeginning();
        salesRef.current?.playFromBeginning();
    }, [])

    return (
        <React.Fragment>
            <Col xxl={4} md={6}>
                <Card className="card-animate bg-soft-info">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <Player 
                                    ref={coinsRef} 
                                    size={75}
                                    icon={ coinsIcon }
                                    onComplete={() => coinsRef.current?.playFromBeginning()}
                                />
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
                                <Player 
                                    ref={salesRef} 
                                    size={75}
                                    icon={ salesIcon }
                                    onComplete={() => salesRef.current?.playFromBeginning()}
                                />
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