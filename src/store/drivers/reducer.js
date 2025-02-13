import {
  API_DRIVERS_RESPONSE_SUCCESS,
  API_DRIVERS_RESPONSE_ERROR,
  GET_DRIVERS_TABLE_DATA
} from "./actionType";

const INIT_STATE = {
  driversData: [],
  error: {}
};

const Drivers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_DRIVERS_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_DRIVERS_TABLE_DATA:
          return {
            ...state,
            driversData: action.payload.data
          };

        default:
          return state;
      }
    case API_DRIVERS_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_DRIVERS_TABLE_DATA:
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
export default Drivers;