import {
  API_BUSINESSES_RESPONSE_SUCCESS,
  API_BUSINESSES_RESPONSE_ERROR,
  GET_BUSINESSES_TABLE_DATA
} from "./actionType";


// common success
export const bizsApiSuccess = (actionType, data) => ({
  type: API_BUSINESSES_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const bizsApiError = (actionType, error) => ({
  type: API_BUSINESSES_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Appa drivers data
export const getBusinessesTableData = id => ({
  type: GET_BUSINESSES_TABLE_DATA,
  id
});

