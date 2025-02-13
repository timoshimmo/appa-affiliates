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

const INIT_STATE = {
    transationList: [],
    walletTransactions: [],
    orderList: [],
    wallet: {},
    loading: false,
    success: false,
    error: null,
    data: null
};

const Wallet = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_WALLET_TRANSCTIONS:
                    return {
                        ...state,
                        walletTransactions: action.payload.data,
                    };

                case GET_ORDRER_LIST:
                    return {
                        ...state,
                        orderList: action.payload.data,
                    };

                case GET_WALLET:
                    return {
                        ...state,
                        wallet: action.payload.data,
                    };

                default:
                    return { ...state };
            }

        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_WALLET_TRANSCTIONS:
                    return {
                        ...state,
                        error: action.payload.error,
                    };

                case GET_ORDRER_LIST:
                    return {
                        ...state,
                        error: action.payload.error,
                    };

                case GET_WALLET:
                    return {
                        ...state,
                        error: action.payload.error,
                    };

                default:
                    return { ...state };
            }

        case GET_WALLET_TRANSCTIONS: {
            return {
                ...state,
            };
        }

        case GET_ORDRER_LIST: {
            return {
                ...state,
            };
        }

        case GET_WALLET: {
            return {
                ...state,
            };
        }

        case CREATE_WALLET: {
            return  {
                ...state,
                loading: true,
                error: null,
              };
        }

    case CREATE_WALLET_RESPONSE_SUCCESS: {
        return {
            ...state,
            loading: false,
            data: action.payload,
            success: true,
            error: null,

        };
    }
    case CREATE_WALLET_RESPONSE_ERROR: {
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    }


    default:
            return { ...state };
    }
};

export default Wallet;