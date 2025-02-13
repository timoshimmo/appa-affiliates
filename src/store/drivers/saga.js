import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_DRIVERS_TABLE_DATA } from "./actionType";
import { driversApiSuccess, driversApiError } from "./action";


import { affiliateGetDriversTable } from "../../helpers/backend_helper";

function* getDriversData({ id }) {

  try {
    const response = yield call(affiliateGetDriversTable, id);
    yield put(driversApiSuccess(GET_DRIVERS_TABLE_DATA, response));
  } catch (error) {
    yield put(driversApiError(GET_DRIVERS_TABLE_DATA, error));
  }
}


export function* watchGetDriversData() {
  yield takeEvery(GET_DRIVERS_TABLE_DATA, getDriversData);
}


function* driversSaga() {
  yield all([fork(watchGetDriversData)]);
}

export default driversSaga;
