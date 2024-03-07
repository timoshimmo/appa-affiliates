import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { EDIT_PROFILE, GET_PROFILE } from "./actionTypes";
import { profileSuccess, profileError } from "./actions";
//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeProfile,
  postJwtProfile,
} from "../../../helpers/fakebackend_helper";

import { affiliateGetProfile } from "../../../helpers/backend_helper";


//const fireBaseBackend = getFirebaseBackend();

function* getProfile({ payload: { params } }) {
  try {

    const response = yield call(affiliateGetProfile, params);

   // console.log("PROFILE RESPONSE: ", response);
    if (response.errors) {
      console.log("PROFILE ERR RESPONSE:", response.errors[0]);
      yield put(profileError(response.errors[0].message));
    } else {
      console.log("PROFILE RESPONSE:", response);
      yield put(profileSuccess(response));
    }

  } catch (error) {
    console.log("PROFILE ERROR:", error);
    yield put(profileError(error));
  }

}


function* editProfile({ payload: { params } }) {
  try {

    const response = yield call(affiliateGetProfile, params);
    if (response.errors) {
      console.log("PROFILE ERR RESPONSE:", response.errors[0]);
      yield put(profileError(response.errors[0].message));
    } else {

      yield put(profileSuccess(response));
    }

  } catch (error) {
    yield put(profileError(error));
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
}

function* ProfileSaga() {
  yield all([fork(watchProfile)]);
}

export default ProfileSaga;
