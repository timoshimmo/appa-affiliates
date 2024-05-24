import {
  API_USERS_RESPONSE_SUCCESS,
  API_USERS_RESPONSE_ERROR,
  GET_USERS_TABLE_DATA
} from "./actionType";

const INIT_STATE = {
  usersData: [],
  error: {}
};

const Users = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_USERS_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_USERS_TABLE_DATA:
          return {
            ...state,
            usersData: action.payload.data
          };

        default:
          return state;
      }
    case API_USERS_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_USERS_TABLE_DATA:
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
export default Users;