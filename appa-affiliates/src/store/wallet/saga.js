import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
    GET_TRANSATION_LIST,
    GET_ORDRER_LIST,
    GET_WALLET,
    GET_WALLET_TRANSCTIONS,
    CREATE_WALLET
} from "./actionType";
import { WalletApiResponseSuccess, WalletApiResponseError, createWalletSuccessful, createWalletFailed } from "./action";

import { affiliateGetWallet as  affiliateGetWalletApi,
    affiliateCreateWallet as affiliateCreateWalletApi,
    affiliateGetTransactions as affiliateGetTransactionsApi
} from "../../helpers/backend_helper";

//Include Both Helper File with needed methods
import {
    getOrderList as getOrderListApi,
}
    from "../../helpers/fakebackend_helper";

    /*
function* getTransationList({ id }) {
    try {
        const response = yield call(affiliateGetTransactionsApi, id);
        if (response.errors) {
            //console.log("WALLET RESPONSE NO WALLET DATA:", response);
            yield put(WalletApiResponseError(GET_TRANSATION_LIST, response));
          } else {
            //console.log("WALLET RESPONSE SUCCESS:", JSON.stringify(response));
            yield put(WalletApiResponseSuccess(GET_TRANSATION_LIST, response));
          }
    } catch (error) {
        yield put(WalletApiResponseError(GET_TRANSATION_LIST, error));
    }
}
*/

function* getWalletTransactions({ id }) {
    try {
        const response = yield call(affiliateGetTransactionsApi, id);
        if (response.errors) {
            //console.log("WALLET RESPONSE NO WALLET DATA:", response);
            yield put(WalletApiResponseError(GET_WALLET_TRANSCTIONS, response));
          } else {
            //console.log("WALLET RESPONSE SUCCESS:", JSON.stringify(response));
            yield put(WalletApiResponseSuccess(GET_WALLET_TRANSCTIONS, response));
          }
    } catch (error) {
        yield put(WalletApiResponseError(GET_WALLET_TRANSCTIONS, error));
    }
}

function* getOrderList() {
    try {
        const response = yield call(getOrderListApi);
        yield put(WalletApiResponseSuccess(GET_ORDRER_LIST, response));
    } catch (error) {
        yield put(WalletApiResponseError(GET_ORDRER_LIST, error));
    }
}

function* getWallet({ id }) {
    try {
      const response = yield call(affiliateGetWalletApi, id);
      
      if (response.errors) {
        //console.log("WALLET RESPONSE NO WALLET DATA:", response);
        yield put(WalletApiResponseError(GET_WALLET, response));
      } else {
        //console.log("WALLET RESPONSE SUCCESS:", JSON.stringify(response));
        yield put(WalletApiResponseSuccess(GET_WALLET, response));
      }
    } catch (error) {
        //console.log("WALLET RESPONSE ERROR:", error);
        yield put(WalletApiResponseError(GET_WALLET, error));
    }
  }

  function* createWallet({ payload: { data } }) {
    try {
        const response = yield call(affiliateCreateWalletApi, data);
        if (response.errors) {
          yield put(createWalletFailed(response.errors[0].message));
        } else {
          yield put(createWalletSuccessful(response));
        }
    } catch (error) {
      yield put(createWalletFailed(error));
    }
  }

export function* watchGetWalletTransactions() {
    yield takeEvery(GET_WALLET_TRANSCTIONS, getWalletTransactions);
}
export function* watchGetOrderList() {
    yield takeEvery(GET_ORDRER_LIST, getOrderList);
}

export function* watchOnGetWallet() {
    yield takeEvery(GET_WALLET, getWallet);
}

export function* watchOnCreateWallet() {
    yield takeEvery(CREATE_WALLET, createWallet);
}

function* walletSaga() {
    yield all([
        fork(watchGetWalletTransactions),
        fork(watchGetOrderList),
        fork(watchOnGetWallet),
        fork(watchOnCreateWallet)
    ]);
}

export default walletSaga;
