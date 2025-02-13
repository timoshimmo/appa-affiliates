import React, { useEffect, useRef } from 'react';
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Player } from '@lordicon/react';
import coinsIcon from "../../../assets/images/lottie/wired-outline-298-coins-hover-jump.json";
import coinIcon from "../../../assets/images/lottie/wired-outline-290-coin-hover-pinch.json";
import piggyBankIcon from "../../../assets/images/lottie/wired-outline-453-savings-pig-hover-pinch.json";
import exchageIcon from "../../../assets/images/lottie/wired-outline-220-arrow-9-hover-pointing.json";


//const ICON = require('./lock.json');

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

    const coinsRef = useRef(null);
    const coinRef = useRef(null);
    const piggyBankRef = useRef(null);
    const arrowRef = useRef(null);
  
    useEffect(() => {
        coinsRef.current?.playFromBeginning();
        coinRef.current?.playFromBeginning();
        piggyBankRef.current?.playFromBeginning();
        arrowRef.current?.playFromBeginning();
    }, [])


    return (
        <React.Fragment>
            <Col xxl={3} md={6}>
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
                            <Player 
                                ref={coinRef} 
                                size={75}
                                icon={ coinIcon }
                                onComplete={() => coinRef.current?.playFromBeginning()}
                            />
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
                            <Player 
                                ref={piggyBankRef} 
                                size={75}
                                icon={ piggyBankIcon }
                                onComplete={() => piggyBankRef.current?.playFromBeginning()}
                            />
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
                            <Player 
                                ref={arrowRef} 
                                size={75}
                                icon={ exchageIcon }
                                onComplete={() => arrowRef.current?.playFromBeginning()}
                            />
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