import {
  VALIDATE_TOKEN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR,
} from "./actionTypes";

const initialState = {
  validateTokenSuccessMsg: null,
  validateTokenError: null,
  loading: false,
};

const validateToken = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_TOKEN:
      state = {
        ...state,
        validateTokenSuccessMsg: null,
        validateTokenError: null,
        loading: true,
      };
      break;
    case VALIDATE_TOKEN_SUCCESS:
      state = {
        ...state,
        validateTokenSuccessMsg: action.payload,
        loading: false,
      };
      break;
    case VALIDATE_TOKEN_ERROR:
      state = { ...state, validateTokenError: action.payload, loading: false, };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default validateToken;
