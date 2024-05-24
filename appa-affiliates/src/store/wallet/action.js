import {
    GET_TRANSATION_LIST,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
    GET_ORDRER_LIST,
    GET_WALLET,
    GET_WALLET_TRANSCTIONS,
    CREATE_WALLET,
    CREATE_WALLET_RESPONSE_SUCCESS,
    CREATE_WALLET_RESPONSE_ERROR
} from "./actionType";

// common success
export const WalletApiResponseSuccess = (actionType, data) => ({
    type: API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const WalletApiResponseError = (actionType, error) => ({
    type: API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const createWallet = data => ({
    type: CREATE_WALLET,
    payload: { data },
});

export const createWalletSuccessful = data => {
    return {
      type: CREATE_WALLET_RESPONSE_SUCCESS,
      payload: data,
    }
  }
  
  export const createWalletFailed = data => {
    return {
      type: CREATE_WALLET_RESPONSE_ERROR,
      payload: data,
    }
  }

export const getWalletOrderList = () => ({
    type: GET_ORDRER_LIST,
});

export const getWallet = id => ({
    type: GET_WALLET,
    id,
});

export const getTransactionWallet = id => ({
  type: GET_WALLET_TRANSCTIONS,
  id,
});
