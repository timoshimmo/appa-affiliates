import {
  API_COMMISSIONS_RESPONSE_SUCCESS,
  API_COMMISSIONS_RESPONSE_ERROR,
  GET_COMMISSIONS_DATA
} from "./actionType";

const INIT_STATE = {
  commissionsData: [],
  error: {}
};

const Commissions = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_COMMISSIONS_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_COMMISSIONS_DATA:
          return {
            ...state,
            commissionsData: action.payload.data
          };

        default:
          return state;
      }
    case API_COMMISSIONS_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_COMMISSIONS_DATA:
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
export default Commissions;