import {
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  GET_COMMISSIONS_CHARTS_DATA,
  GET_COMMISSIONS_TABLE_DATA,
  GET_WIDGET_DATA
} from "./actionType";

const INIT_STATE = {
  commissionsOverviewData: [],
  commissionsTableData: [],
  widgetData: [],
  error: {}
};

const Dashboard = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_COMMISSIONS_CHARTS_DATA:
          return {
            ...state,
            commissionsOverviewData: action.payload.data
          };
        case GET_COMMISSIONS_TABLE_DATA:
          return {
            ...state,
            commissionsTableData: action.payload.data
          };

        case GET_WIDGET_DATA:
          return {
            ...state,
            widgetData: action.payload.data
          };

        default:
          return state;
      }
    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_COMMISSIONS_CHARTS_DATA:
          return {
            ...state,
            error: action.payload.error
          };
        case GET_COMMISSIONS_TABLE_DATA:
          return {
            ...state,
            error: action.payload.error
          };

        case GET_WIDGET_DATA:
          return {
            ...state,
            error: action.payload.error
          };
          
        default:
          return state;
      }
    default:
      return state;
  }
};
export default Dashboard;