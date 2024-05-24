import {
  API_COMMISSIONS_RESPONSE_SUCCESS,
  API_COMMISSIONS_RESPONSE_ERROR,
  GET_COMMISSIONS_DATA
} from "./actionType";

// common success
export const commissionsApiSuccess = (actionType, data) => ({
  type: API_COMMISSIONS_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const commissionsApiError = (actionType, error) => ({
  type: API_COMMISSIONS_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Appa drivers data
export const getCommissionsData = id => ({
  type: GET_COMMISSIONS_DATA,
  id
});

