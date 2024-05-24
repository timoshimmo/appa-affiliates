import React, { useEffect, useState } from 'react';
import { crmWidgets } from "../../common/data";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { getWidgetData } from '../../store/actions';

const Widgets = () => {

    const dispatch = useDispatch();

    const { widgetData } = useSelector((state) => ({
        widgetData: state.Dashboard.widgetData,
    }));

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        dispatch(getWidgetData(obj.id));
    }, [dispatch]);

    const [widget_data, setWidgetData] = useState(widgetData);

    useEffect(() => {
        setWidgetData(widgetData);
    }, [widgetData]);

   

    return (
        <React.Fragment>
            <div className="col-xl-12">
                <div className="card crm-widget">
                    <div className="card-body p-0">
                        <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                                <div className="col" key={1}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Drivers<i className={"ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"bx bx-user-circle display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={""}
                                                        suffix={""}
                                                        end={widget_data.count_affiliated_dm}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" key={2}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Businesses<i className={"ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"ri-store-2-line display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={""}
                                                        suffix={""}
                                                        end={widget_data.count_affiliated_biz}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" key={3}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Users<i className={"ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"ri-user-6-line display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={""}
                                                        suffix={""}
                                                        end={widget_data.count_affiliated_users}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" key={4}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Total Commissions Earned<i className={"ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"ri-exchange-dollar-line display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={"₦"}
                                                        suffix={""}
                                                        end={widget_data.tot_commissions_earned}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" key={5}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Total Transactions<i className={"ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"ri-exchange-line display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={"₦"}
                                                        suffix={""}
                                                        separator=","
                                                        end={widget_data.tot_transaction}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" key={6}>
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">Wallet Balance<i className={"ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"}></i></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"ri-wallet-line display-6 text-muted"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={"₦"}
                                                        suffix={""}
                                                        separator=","
                                                        end={widget_data.wallet_balance}
                                                        decimals={0}
                                                        duration={4}
                                                    />
                                                </span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/*
                        {(crmWidgets).map((widget, index) => (
                                
                            ))}    
                        
    */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;