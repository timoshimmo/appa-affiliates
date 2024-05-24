import {
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  GET_COMMISSIONS_CHARTS_DATA,
  GET_COMMISSIONS_TABLE_DATA,
  GET_WIDGET_DATA
} from "./actionType";

// common success
export const dashboardApiSuccess = (actionType, data) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const dashboardApiError = (actionType, error) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Appa Dashboard widget data
export const getWidgetData = id => ({
  type: GET_WIDGET_DATA,
  id
});

// Appa Dashboard widget data
export const getCommissionsChartData = id => ({
  type: GET_COMMISSIONS_CHARTS_DATA,
  id
});

// Appa Dashboard widget data
export const getCommissionsTableData = id => ({
  type: GET_COMMISSIONS_TABLE_DATA,
  id
});


// Balance Overview charts data
/*export const getBalanceOverviewChartsData = (balanceOverviewData) => ({
  type: GET_BALANCEOVERVIEW_CHARTS_DATA,
  payload: balanceOverviewData
});

// Dial Type charts data
export const getDialTypeChartsData = (dialTypeData) => ({
  type: GET_DIALTYPE_CHARTS_DATA,
  payload: dialTypeData
});

// Sales Forecast charts data
export const getSalesForecastChartsData = (salesForecastData) => ({
  type: GET_SALESFORECAST_CHARTS_DATA,
  payload: salesForecastData
});

*/
