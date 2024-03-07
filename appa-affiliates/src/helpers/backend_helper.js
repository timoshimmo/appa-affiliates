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