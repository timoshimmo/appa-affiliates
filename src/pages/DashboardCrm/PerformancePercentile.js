import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import Vector from '../DashboardEcommerce/VectorMap';
import performanceIcon from "../../assets/images/landing/good-feedback.png";
import { useSelector, useDispatch } from "react-redux";
import { getPerfromancePercentileData } from '../../store/actions';

const PerformancePercentile = () => {

    const dispatch = useDispatch();
    
    const [percentileData, setPercentileData] = useState(0);
    const [totCount, setTotCount] = useState(0);
    const [txtDirection, setTxtDirection] = useState("");

    const { performancePercentileData } = useSelector(state => ({
        performancePercentileData: state.Dashboard.performanceData
    }));

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        var index = performancePercentileData.findIndex(p => p.affiliate_id == obj.id);
        const position = index + 1;
        let result = 0;

        const valLevel = position / performancePercentileData.length * 100;

        if(valLevel > 50) {
            result = 100 - valLevel + 1;
            setPercentileData(result);
            setTxtDirection("bottom");
        }
        else {
            setPercentileData(valLevel);
            setTxtDirection("top");
        }
        
        setTotCount(performancePercentileData.length);
        
    }, [performancePercentileData]);


    useEffect(() => {
        dispatch(getPerfromancePercentileData());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Performance Statistics</h4>
                        {/* <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-primary btn-sm">
                                Export Report
                            </button>
                        </div> */}
                    </CardHeader>

                    <CardBody>

                        <div
                            data-colors='["--vz-light", "--vz-success", "--vz-primary"]'
                            style={{ height: "269px" }} dir="ltr"
                            className="d-flex flex-column align-items-center">
                            {/*<Vector
                                value="world_mill"
                            /> */}
                            <img
                                src={performanceIcon}
                                alt="Header Ranking"
                                height="150"
                                
                            />
                            <div className="d-flex flex-column align-items-center mt-4">
                                
                                {
                                    percentileData > 0 &&
                                    (
                                        <>
                                            <span>You are among the {txtDirection}</span>
                                            <p className='mb-0 display-5'>{percentileData}%</p>
                                            <span>performers among {totCount} affiliates</span>
                                        </>
                                    )

                                }
                                
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default PerformancePercentile;