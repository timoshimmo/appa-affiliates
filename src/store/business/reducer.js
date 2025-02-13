import {
  API_BUSINESSES_RESPONSE_SUCCESS,
  API_BUSINESSES_RESPONSE_ERROR,
  GET_BUSINESSES_TABLE_DATA
} from "./actionType";

const INIT_STATE = {
  businessData: [],
  error: {}
};

const Businesses = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_BUSINESSES_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_BUSINESSES_TABLE_DATA:
          return {
            ...state,
            businessData: action.payload.data
          };

        default:
          return state;
      }
    case API_BUSINESSES_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_BUSINESSES_TABLE_DATA:
          return {
            ...state,
            error: action.payload.error
          };

        default:
          return state;
      }
    default:
      return state;
  }
};
export default Businesses;