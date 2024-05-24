import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_COMMISSIONS_CHARTS_DATA, GET_COMMISSIONS_TABLE_DATA, GET_WIDGET_DATA } from "./actionType";
import { dashboardApiSuccess, dashboardApiError } from "./action";
import { affiliateGetDashboard, affiliateGetDbCharts, affiliateGetDbCommissionsTable } from "../../helpers/backend_helper";

function* getWidgetData({ id }) {

  try {
    const response = yield call(affiliateGetDashboard, id);
    yield put(dashboardApiSuccess(GET_WIDGET_DATA, response));
  } catch (error) {
    yield put(dashboardApiError(GET_WIDGET_DATA, error));
  }
}

function* getChartsData({ id }) {

  try {
    const response = yield call(affiliateGetDbCharts, id);
    yield put(dashboardApiSuccess(GET_COMMISSIONS_CHARTS_DATA, response));
  } catch (error) {
    yield put(dashboardApiError(GET_COMMISSIONS_CHARTS_DATA, error));
  }
}


function* getTablesData({ id }) {

  try {
    const response = yield call(affiliateGetDbCommissionsTable, id);
    yield put(dashboardApiSuccess(GET_COMMISSIONS_TABLE_DATA, response));
  } catch (error) {
    yield put(dashboardApiError(GET_COMMISSIONS_TABLE_DATA, error));
  }
}

export function* watchGetChartsData() {
  yield takeEvery(GET_COMMISSIONS_CHARTS_DATA, getChartsData);
}

export function* watchGeTablesData() {
  yield takeEvery(GET_COMMISSIONS_TABLE_DATA, getTablesData);
}

export function* watchGetWidgetData() {
  yield takeEvery(GET_WIDGET_DATA, getWidgetData);
}

function* dashboardSaga() {
  yield all([fork(watchGetChartsData)]);
  yield all([fork(watchGeTablesData)]);
  yield all([fork(watchGetWidgetData)]);
}

export default dashboardSaga;