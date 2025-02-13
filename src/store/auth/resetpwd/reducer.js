import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_RESET_PASSWORD_FLAG,
} from "./actionTypes";

const initialState = {
  resetSuccessMsg: null,
  resetError: null,
  loading: false,
};

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      state = {
        ...state,
        resetSuccessMsg: null,
        resetError: null,
        loading: true,
      };
      break;
    case RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        resetSuccessMsg: action.payload,
        loading: false,
      };
      break;
    case RESET_PASSWORD_ERROR:
      state = { ...state, resetError: action.payload, loading: false, };
      break;
    case RESET_RESET_PASSWORD_FLAG:
        state = {
          ...state,
          resetSuccessMsg: null,
          loading: false,
          resetError: null
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default resetPassword;
