import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_BUSINESSES_TABLE_DATA } from "./actionType";
import { bizsApiSuccess, bizsApiError } from "./action";


import { affiliateGetBizsTable } from "../../helpers/backend_helper";

function* getBizsData({ id }) {

  try {
    const response = yield call(affiliateGetBizsTable, id);
    yield put(bizsApiSuccess(GET_BUSINESSES_TABLE_DATA, response));
  } catch (error) {
    yield put(bizsApiError(GET_BUSINESSES_TABLE_DATA, error));
  }
}


export function* watchgetBizsData() {
  yield takeEvery(GET_BUSINESSES_TABLE_DATA, getBizsData);
}


function* bizsSaga() {
  yield all([fork(watchgetBizsData)]);
}

export default bizsSaga;
