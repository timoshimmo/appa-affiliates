import {
  VALIDATE_TOKEN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR,
} from "./actionTypes";

export const userValidateToken = (token, history) => {
  return {
    type: VALIDATE_TOKEN,
    payload: { token, history },
  };
};

export const userValidateTokenSuccess = message => {
  return {
    type: VALIDATE_TOKEN_SUCCESS,
    payload: message,
  };
};

export const userValidateTokenError = message => {
  return {
    type: VALIDATE_TOKEN_ERROR,
    payload: message,
  };
};
