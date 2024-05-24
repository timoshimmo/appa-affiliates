import {
  API_DRIVERS_RESPONSE_SUCCESS,
  API_DRIVERS_RESPONSE_ERROR,
  GET_DRIVERS_TABLE_DATA
} from "./actionType";

// common success
export const driversApiSuccess = (actionType, data) => ({
  type: API_DRIVERS_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const driversApiError = (actionType, error) => ({
  type: API_DRIVERS_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Appa drivers data
export const getDriversTableData = id => ({
  type: GET_DRIVERS_TABLE_DATA,
  id
});

