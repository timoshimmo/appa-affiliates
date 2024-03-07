import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
  RESET_FORGET_PASSWORD_FLAG,
} from "./actionTypes";

const initialState = {
  forgetSuccessMsg: null,
  forgetError: null,
  loading: false,
};

const forgetPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      state = {
        ...state,
        forgetSuccessMsg: null,
        forgetError: null,
        loading: true,
      };
      break;
    case FORGET_PASSWORD_SUCCESS:
      state = {
        ...state,
        forgetSuccessMsg: action.payload,
        loading: false,
      };
      break;
    case FORGET_PASSWORD_ERROR:
      state = { ...state, forgetError: action.payload, loading: false, };
      break;
    case RESET_FORGET_PASSWORD_FLAG:
        state = {
          ...state,
          forgetSuccessMsg: null,
          loading: false,
          forgetError: null
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default forgetPassword;
