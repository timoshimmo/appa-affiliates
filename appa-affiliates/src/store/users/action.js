import {
  API_USERS_RESPONSE_SUCCESS,
  API_USERS_RESPONSE_ERROR,
  GET_USERS_TABLE_DATA
} from "./actionType";


// common success
export const usersApiSuccess = (actionType, data) => ({
  type: API_USERS_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const usersApiError = (actionType, error) => ({
  type: API_USERS_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Appa drivers data
export const getUsersTableData = id => ({
  type: GET_USERS_TABLE_DATA,
  id
});

