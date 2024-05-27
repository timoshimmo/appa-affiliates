import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper";

const Widgets = props => {

    //const [balance, setBalance] = useState(0);
    //const [totWithdrawal, setTotWithdrawal] = useState(0);
   // const [totDeposit, setTotDeposit] = useState(0);

    /* useEffect(() => {
        console.log("PROPS:", props);
        if (Object.keys(props.data).length > 0) {
            setBalance(props.data.balance);
            setTotWithdrawal(props.data.total_withdrawn);
            setTotDeposit(props.data.total_deposited);
        }
    }, [props]); */

    return (
        <React.Fragment>
            <Col xxl={3} md={6}>
                <Card className="card-animate bg-soft-info">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon
                                    src="https://cdn.lordicon.com/vaeagfzc.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "75px", height: "75px" }}>
                                </lord-icon>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h1 className="mb-2">
                                    <span key={props.data.balance} className="counter-value" data-target="74858">
                                        <CountUp start={0} end={props.data.balance} separator="," prefix="₦" duration={3} />
                                    </span>
                                    <small className="text-muted fs-13">.00</small>
                                </h1>
                            </div>
                        </div>
                        <h6 className="text-muted mb-0">Available Balance (NGN)</h6>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon src="https://cdn.lordicon.com/qhviklyi.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "75px", height: "75px" }}></lord-icon>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h1 className="mb-2">
                                    <span key={props.data.total_withdrawn} className="counter-value" data-target="74361">
                                        <CountUp start={0} end={props.data.total_withdrawn} separator="," prefix="₦" duration={3} />
                                    </span>
                                    <small className="text-muted fs-14">.00</small>
                                </h1>
                            </div>
                           
                        </div>
                        <h6 className="text-muted mb-0">Total Withdrawn</h6>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon
                                    src="https://cdn.lordicon.com/yeallgsa.json"
                                    trigger="loop"
                                    colors="primary:#405189,secondary:#0ab39c"
                                    style={{ width: "75px", height: "75px" }}>
                                </lord-icon>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h1 className="mb-2">
                                    <span key={props.data.total_deposited} className="counter-value" data-target="97685">
                                        <CountUp start={0} end={props.data.total_deposited} separator="," prefix="₦" duration={3} />
                                    </span>
                                    <small className="text-muted fs-14">.00</small>
                                </h1>
                            </div>
                        </div>
                        <h6 className="text-muted mb-0">Total deposited</h6>
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={3} md={6}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <lord-icon
                                    src="https://cdn.lordicon.com/axacjdbs.json"
                                    trigger="loop"
                                    colors="primary:#405189,secondary:#0ab39c"
                                    style={{ width: "75px", height: "75px" }}>
                                </lord-icon>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h1 className="mb-2">
                                    <span className="counter-value" data-target="97685">
                                        <CountUp start={0} end={props.data.total_withdrawn + props.data.total_deposited} separator="," prefix="₦" duration={3} />
                                    </span>
                                    <small className="text-muted fs-14">.00</small>
                                </h1>
                            </div>
                        </div>
                        <h6 className="text-muted mb-0">Total transactions</h6>
                    </CardBody>
                </Card>
            </Col>
            
        </React.Fragment>
    );
};

export default Widgets;