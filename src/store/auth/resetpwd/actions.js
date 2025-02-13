import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_RESET_PASSWORD_FLAG,
} from "./actionTypes";

export const userResetPassword = (user, history) => {
  return {
    type: RESET_PASSWORD,
    payload: { user, history },
  };
};

export const userResetPasswordSuccess = message => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: message,
  };
};

export const userResetPasswordError = message => {
  return {
    type: RESET_PASSWORD_ERROR,
    payload: message,
  };
};

export const resetResetPasswordFlag = () => {
  return {
    type: RESET_RESET_PASSWORD_FLAG,
  }
};
