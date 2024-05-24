import { PROFILE_ERROR, PROFILE_SUCCESS, EDIT_PROFILE, RESET_PROFILE_FLAG, GET_PROFILE, EDIT_SUCCESS, EDIT_ERROR, EDIT_PASSWORD, PASSWORD_SUCCESS, PASSWORD_ERROR, RESET_PASSWORD_FLAG } from "./actionTypes"

export const editProfile = user => {
  return {
    type: EDIT_PROFILE,
    payload: { user },
  }
}

export const getProfile = params => {
  return {
    type: GET_PROFILE,
    payload: { params },
  }
}

export const profileSuccess = user => {
  return {
    type: PROFILE_SUCCESS,
    payload: { user },
  }
}

export const editSuccess = user => {
  return {
    type: EDIT_SUCCESS,
    payload: { user },
  }
}

export const profileError = error => {
  return {
    type: PROFILE_ERROR,
    payload: error,
  }
}

export const editError = error => {
  return {
    type: EDIT_ERROR,
    payload: error,
  }
}

export const resetProfileFlag = error => {
  return {
    type: RESET_PROFILE_FLAG,
  }
}

export const editPassword = user => {
  return {
    type: EDIT_PASSWORD,
    payload: { user },
  }
}

export const passwordSuccess = user => {
  return {
    type: PASSWORD_SUCCESS,
    payload: { user },
  }
}

export const passwordError = error => {
  return {
    type: PASSWORD_ERROR,
    payload: error,
  }
}

export const resetPasswordFlag = error => {
  return {
    type: RESET_PASSWORD_FLAG,
  }
}
