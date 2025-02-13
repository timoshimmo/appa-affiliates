import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { EDIT_PROFILE, GET_PROFILE, EDIT_PASSWORD } from "./actionTypes";
import { profileSuccess, profileError, editSuccess, editError, passwordSuccess, passwordError } from "./actions";
//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper";
/*
import {
  postFakeProfile,
  postJwtProfile,
} from "../../../helpers/fakebackend_helper";
*/

import { affiliateGetProfile, affiliateEditProfile, affiliateEditPassword } from "../../../helpers/backend_helper";


//const fireBaseBackend = getFirebaseBackend();

function* getProfile({ payload: { params } }) {
  try {

    const response = yield call(affiliateGetProfile, params);

   // console.log("PROFILE RESPONSE: ", response);
    if (response.errors) {
      console.log("PROFILE ERR RESPONSE:", response.errors[0]);
      yield put(profileError(response.errors[0].message));
    } else {
      //console.log("PROFILE RESPONSE:", response);
      yield put(profileSuccess(response));
    }

  } catch (error) {
    console.log("PROFILE ERROR:", error);
    yield put(profileError(error));
  }

}


function* editProfile({ payload: { user } }) {
  try {
    const response = yield call(affiliateEditProfile, user);
    if (response.errors) {
      console.log("EDIT PROFILE ERR RESPONSE:", response.errors[0]);
      yield put(editError(response.errors[0].message));
    } else {
      //console.log("EDIT PROFILE SUCCESS RESPONSE:", response);
      yield put(editSuccess(response));
    }

  } catch (error) {
    yield put(editError(error));
  }

}

function* editPassword({ payload: { user } }) {

  try {
    const response = yield call(affiliateEditPassword, user);
    if (response.errors) {
      console.log("EDIT PASSWORD ERR RESPONSE:", response.errors[0]);
      yield put(passwordError(response.errors[0].message));
    } else {
      //console.log("EDIT PROFILE SUCCESS RESPONSE:", response);
      yield put(passwordSuccess(response));
    }

  } catch (error) {
    yield put(passwordError(error));
  }

}

/*
function* editProfile({ payload: { user } }) {

  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.editProfileAPI,
        user.username,
        user.idx
      );
      yield put(profileSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtProfile, "/post-jwt-profile", {
        username: user.username,
        idx: user.idx,
      });
      yield put(profileSuccess(response));
    } else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeProfile, user);
      yield put(profileSuccess(response));
    }
  } catch (error) {
    yield put(profileError(error));
  }
}

*/

export function* watchProfile() {
  yield takeEvery(EDIT_PROFILE, editProfile);
  yield takeEvery(GET_PROFILE, getProfile);
  //yield takeEvery(EDIT_PASSWORD, editPassword);
}

function* ProfileSaga() {
  yield all([fork(watchProfile)]);
}

export default ProfileSaga;
