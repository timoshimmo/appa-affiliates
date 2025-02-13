import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { RESET_PASSWORD } from "./actionTypes";
import { userResetPasswordSuccess, userResetPasswordError } from "./actions";

//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper";

import { affiliateResetPassword } from "../../../helpers/backend_helper";

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* resetUserPassword({ payload: { user, history } }) {

  try {

    const response = yield call(affiliateResetPassword, user);
    if (response.errors) {
      console.log("RST ERR RESPONSE:", response.errors[0]);
      yield put(userResetPasswordError(response.errors[0].message));
    } else {
      console.log("RST SUCCESS:", JSON.stringify(response));
      yield put(
        userResetPasswordSuccess(
          "Your password had been updated successfully"
        )
      );
    }

  } catch (error) {
    yield put(userResetPasswordError(error));
  }
}

/*
function* resetUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.resetPassword, user.email);
      if (response) {
        yield put(
          userResetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtresetPwd, "/jwt-reset-pwd", {
        email: user.email,
      });
      if (response) {
        yield put(
          userResetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    } else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeresetPwd, user);
      if (response) {
        yield put(
          userResetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        );
      }
    }
  } catch (error) {
    yield put(userResetPasswordError(error));
  }
}
*/


export function* watchUserPasswordReset() {
  yield takeEvery(RESET_PASSWORD, resetUserPassword);
}

function* resetPasswordSaga() {
  yield all([fork(watchUserPasswordReset)]);
}

export default resetPasswordSaga;
