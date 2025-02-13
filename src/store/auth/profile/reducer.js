import { PROFILE_ERROR, PROFILE_SUCCESS, EDIT_PROFILE, RESET_PROFILE_FLAG, GET_PROFILE, EDIT_SUCCESS, EDIT_ERROR, EDIT_PASSWORD, PASSWORD_SUCCESS, PASSWORD_ERROR, RESET_PASSWORD_FLAG } from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  passLoading: false,
  success: "",
  editSuccess: false,
  passwordSuccess: "",
  editError: "",
  passwordError: null,
  params: "",
  user: {}
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      state = { 
        ...state,
        loading: true,
        success: action.payload.status,
        error: null,
        user: action.payload,
       };
      break;
    case GET_PROFILE:
      state = { ...state,
        success: action.payload.status,
        params: action.payload.data
      };
      break;
    case EDIT_PASSWORD:
        state = { 
          ...state,
          passLoading: true,
          passwordError: null,
          user: action.payload,
         };
        break;
    case PROFILE_SUCCESS:
      state = {
        ...state,
        success: action.payload.status,
        user: action.payload
      };
      break;
    case EDIT_SUCCESS:
      state = {
        ...state,
        loading: false,
        editSuccess: true,
        user: action.payload
      };
      break;
    case PASSWORD_SUCCESS:
        state = {
          ...state,
          passwordSuccess: action.payload.message,
          passLoading: false,
          user: action.payload
        };
      break;
    case PROFILE_ERROR:
      state = {
        ...state,
        error: action.payload
      };
      break;
    case EDIT_ERROR:
      state = {
        ...state,
        loading: false,
        editError: action.payload
      };
      break;
    case PASSWORD_ERROR:
      state = {
        ...state,
        loading: false,
        passwordError: action.payload
      };
      break;
    case RESET_PROFILE_FLAG:
      state = {
        ...state,
        success: null
      };
      break;
    case RESET_PASSWORD_FLAG:
        state = {
          ...state,
          passwordSuccess: "",
          passwordError: null,
          passLoading: false
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default profile;
