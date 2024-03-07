import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from "./actions";

//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { affiliateRegister } from "../../../helpers/backend_helper";

// initialize relavant method of both Auth
//const fireBaseBackend = getFirebaseBackend();

function* registerUser({ payload: { user } }) {
  try {
      const response = yield call(affiliateRegister, user);
      if (response.errors) {
        //console.log("REG ERR RESPONSE:", response.errors[0]);
        yield put(registerUserFailed(response.errors[0].message));
      } else {
        //console.log("REG SUCCESS:", JSON.stringify(response));
        yield put(registerUserSuccessful(response));
      }
  } catch (error) {
    console.log("REG ERROR:", error);
    yield put(registerUserFailed(error));
  }
}

// Is user register successfull then direct plot user in redux.
/*
function* registerUser({ payload: { user } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.registerUser,
        user.email,
        user.password
      );
      yield put(registerUserSuccessful(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtRegister, "/post-jwt-register", user);
      yield put(registerUserSuccessful(response));
    } 
    else if (process.env.REACT_APP_DEFAULTAUTH === "dev" || process.env.REACT_APP_DEFAULTAUTH === "prod") {
      const response = yield call(affiliateRegister, user);
      console.log("REG RESPONSE:", response);
      yield put(registerUserSuccessful(response));
    }
    else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeRegister, user);
      if (response.message === "success") {
        yield put(registerUserSuccessful(response));
      } else {
        yield put(registerUserFailed(response));
      }
    }
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}
*/

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
