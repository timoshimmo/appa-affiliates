import { APIClient } from "./axios_api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};


// Appa Register Method
export const affiliateRegister = data => api.create(url.POST_APPA_REGISTER, data);

// Login Method
export const affiliateLogin = data => api.create(url.POST_APPA_LOGIN, data);

// Forgot Password
export const affiliateForgotPassword = data => api.create(url.POST_APPA_FORGOT_PASSWORD, data);

// Validate Token
export const affiliateValidateToken = data => api.create(url.POST_APPA_VALIDATE_TOKEN, data);

// Reset Password
export const affiliateResetPassword = data => api.put(url.POST_APPA_RESET_PASSWORD, data);

// Get Profile
export const affiliateGetProfile = param => api.get(url.POST_APPA_GET_PROFILE + '/' + param, param);

// Update Profile
export const affiliateEditProfile = data => api.put(url.POST_APPA_EDIT_PROFILE, data);

// Update Password
export const affiliateEditPassword = data => api.put(url.POST_APPA_EDIT_PASSWORD, data);

// Get Wallet
export const affiliateGetWallet = id => api.get(`${url.GET_APPA_WALLET}/${id}`);

// Create Wallet
export const affiliateCreateWallet = data => api.create(url.CREATE_APPA_WALLET, data);

// Get Dashboard Data
export const affiliateGetDashboard = id => api.get(`${url.GET_DASHBOARD_DATA}/${id}`);

// Get Dashboard Graph Data
export const affiliateGetDbCharts = id => api.get(`${url.GET_DASHBOARD_CHARTS_DATA}/${id}`);

// Get Dashboard Commissions Table Data
export const affiliateGetDbCommissionsTable = id => api.get(`${url.GET_DASHBOARD_COMMISSIONS_DATA}/${id}`);

// Get Drivers Table Data
export const affiliateGetDriversTable = id => api.get(`${url.GET_DRIVERS_DATA}/${id}`);

// Get Businesses Table Data
export const affiliateGetBizsTable = id => api.get(`${url.GET_BIZS_DATA}/${id}`);

// Get Users Table Data
export const affiliateGetUsersTable = id => api.get(`${url.GET_USERS_DATA}/${id}`);

// Get Commissions Data
export const affiliateGetCommissionsData = id => api.get(`${url.GET_COMMISSIONS_DATA}/${id}`);

// Get Commissions Data
export const affiliateGetBankList = () => api.get(url.GET_BANK_DATA);

// Get Commissions Data
export const affiliateGetPerformacePercetileData = () => api.get(url.GET_PERFORMANCE_DATA);

// Withdraw From Wallet  
export const affiliateWithdrawWallet = data => api.create(url.POST_WITHDRAW_WALLET, data);

// Deposit To Wallet  
export const affiliateDepositWallet = data => api.create(url.POST_DEPOSIT_WALLET, data);


// Get Wallet Transactions
export const affiliateGetTransactions = id => api.get(`${url.GET_WALLET_TRANSACTIONS}/${id}`);