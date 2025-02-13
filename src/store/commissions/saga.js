import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_COMMISSIONS_DATA } from "./actionType";
import { commissionsApiSuccess, commissionsApiError } from "./action";


import { affiliateGetCommissionsData } from "../../helpers/backend_helper";

function* getCommissionsData({ id }) {

  try {
    const response = yield call(affiliateGetCommissionsData, id);
    console.log("RES: ", response);
    yield put(commissionsApiSuccess(GET_COMMISSIONS_DATA, response));
  } catch (error) {
    yield put(commissionsApiError(GET_COMMISSIONS_DATA, error));
  }
}


export function* watchgetCommissionsData() {
  yield takeEvery(GET_COMMISSIONS_DATA, getCommissionsData);
}


function* commissionsSaga() {
  yield all([fork(watchgetCommissionsData)]);
}

export default commissionsSaga;
