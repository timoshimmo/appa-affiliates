import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { VALIDATE_TOKEN } from "./actionTypes";
import { userValidateTokenSuccess, userValidateTokenError } from "./actions";

//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper";

import { affiliateValidateToken } from "../../../helpers/backend_helper";

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* validateToken({ payload: { token, history } }) {

  try {

    const response = yield call(affiliateValidateToken, token);
    if (response.errors) {
      console.log("VT ERR RESPONSE:", response.errors[0]);
      yield put(userValidateTokenError(response.errors[0].message));
    } else {
      console.log("VT SUCCESS:", JSON.stringify(response));
      yield put(
        userValidateTokenSuccess(
          "Reset link sent to your mailbox, click on it to continue"
        )
      );

      history('/reset-password', { state: { email: token.email, reset_token: token.reset_token }});
    }

  } catch (error) {
    yield put(userValidateTokenError(error));
  }
}

/*
function* forgetUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.forgetPassword, user.email);
      if (response) {
        yield put(
          userValidateTokenSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtForgetPwd, "/jwt-forget-pwd", {
        email: user.email,
      });
      if (response) {
        yield put(
          userValidateTokenSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    } else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeForgetPwd, user);
      if (response) {
        yield put(
          userValidateTokenSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    }
  } catch (error) {
    yield put(userValidateTokenError(error));
  }
}
*/


export function* watchValidateToken() {
  yield takeEvery(VALIDATE_TOKEN, validateToken);
}

function* validateTokenSaga() {
  yield all([fork(watchValidateToken)]);
}

export default validateTokenSaga;
