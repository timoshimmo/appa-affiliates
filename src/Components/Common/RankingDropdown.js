import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getWidgetData } from '../../store/actions';
import SimpleBar from "simplebar-react";
import bronze from "../../assets/images/badges/bronze-medal.png";
import gold from "../../assets/images/badges/gold-medal.png";
import silver from "../../assets/images/badges/silver-medal.png";


const RankingDropdown = () => {

    const dispatch = useDispatch();

    const rankingData = [
        { id: 1, icon: bronze, label: "Bronze", description: "Minimum of 1 total registered referers" },
        { id: 2, icon: silver, label: "Silver", description: "Minimum of 50 total registered referers" },
        { id: 3, icon: gold, label: "Gold", description: "Minimum of 100 total registered referers" },
    ];

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

    const [isRankingDropdown, setIsRankingDropdown] = useState(false);
    const toggleRankingDropdown = () => {
        setIsRankingDropdown(!isRankingDropdown);
    };


    return (
        <React.Fragment>
            <Dropdown isOpen={isRankingDropdown} toggle={toggleRankingDropdown} className="ms-1 topbar-head-dropdown header-item">
                <DropdownToggle className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" tag="button">
                    <img
                        src={widget_data.count_affiliated_users + widget_data.count_affiliated_dm > 0 && widget_data.count_affiliated_users < 50 ? bronze 
                            :
                            widget_data.count_affiliated_users + widget_data.count_affiliated_dm > 50 && widget_data.count_affiliated_users + widget_data.count_affiliated_dm < 100 ? silver
                            :
                            gold
                         }
                        alt="Header Ranking"
                        height="25"
                        className="rounded"
                    />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl dropdown-menu-end py-2">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fs-16 fw-semibold"> Ranking</h6>
                            </Col>
                        </Row>
                    </div>
                    <SimpleBar style={{ maxHeight: "300px" }}>
                        <div className="p-2">
                            {rankingData.map((item, key) => (<div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2" key={key}>
                                <div className="d-flex align-items-center">
                                    <img src={item.icon}
                                        className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                        <h6 className="mt-0 mb-1 fs-15">
                                            <span className="text-reset">{item.label}</span>
                                        </h6>
                                        <p className="mb-0 fs-13 text-muted">
                                            <span>{item.description}</span>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>))}
                        </div>
                    </SimpleBar>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default RankingDropdown;