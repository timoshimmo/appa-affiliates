import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_USERS_TABLE_DATA } from "./actionType";
import { usersApiSuccess, usersApiError } from "./action";


import { affiliateGetUsersTable } from "../../helpers/backend_helper";

function* getUsersData({ id }) {

  try {
    const response = yield call(affiliateGetUsersTable, id);
    yield put(usersApiSuccess(GET_USERS_TABLE_DATA, response));
  } catch (error) {
    yield put(usersApiError(GET_USERS_TABLE_DATA, error));
  }
}


export function* watchgetUsersData() {
  yield takeEvery(GET_USERS_TABLE_DATA, getUsersData);
}


function* usersSaga() {
  yield all([fork(watchgetUsersData)]);
}

export default usersSaga;
