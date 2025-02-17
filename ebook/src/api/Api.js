import { config, ACCESS_TOKEN } from '../../src/config/Config';
import axios from 'axios';

const sendRequest = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`);
  }

  const defaults = { headers };
  options = { ...defaults, ...options };

  return fetch(options.url, options)
    .then(
      (response) => response.json()
        .then(
          (json) => {
            if (!response.ok) {
              return Promise.reject(json);
            }
            return json;
          },
        ),
    );
};

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

export function login(loginRequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/authenticate`,
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}

export function signupStep1(signUpRequest) {
  //alert("inside backend call"+JSON.stringify(signUpRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/signup-step1`,
    method: 'POST',
    body: JSON.stringify(signUpRequest),
  });
}
export function signinStep1(signInRequest) {
  //alert("inside backend call"+JSON.stringify(loginRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/authenticate`,
    method: 'POST',
    body: JSON.stringify(signInRequest),
  });
}
export function logInOtp(loginRequest) {
  //alert("inside backend call"+JSON.stringify(loginRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/authenticate`,
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}
export function logInOtp2(loginRequest) {
  //alert("inside backend call"+JSON.stringify(loginRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/authenticate-step2`,
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}
export function addressUpdate(addressUpdateRequest) {
  return instance.post("/hareKrishnaTraders/order/addressUpdate", addressUpdateRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function gethareKrishnaTradersUserAddress() {
  return instance.get("hareKrishnaTraders/order/getLastUpdatedAddress", {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
  });
}
export function gethareKrishnaTradersUserAddressForShopOwners(orderedUserName) {
  return instance.get("hareKrishnaTraders/order/getLastUpdatedAddress", {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
  });
}
export function hareKrishnaTradersMobileNumberUpdate(email, payload) {
  return instance.put(`/hareKrishnaTraders/order/mobileNumberUpdate/${email}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}

export function validateEmailOTP(otpValidationRequest) {
  //alert("inside backend call"+JSON.stringify(otpValidationRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/signup-step2`,
    method: 'POST',
    body: JSON.stringify(otpValidationRequest),
  });
}
export function sendEmailOTP(signUpRequest) {
  alert("inside backend call"+JSON.stringify(signUpRequest));
  return sendRequest({
    url: `${config.url.API_BASE_URL}/hareKrishnaTraders/public/idp/signup-step2`,
    method: 'POST',
    body: JSON.stringify(signUpRequest),
  });
}

export function updatePassword(updatePasswordRequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/account/changePassword`,
    method: 'POST',
    body: JSON.stringify(updatePasswordRequest),
  });
}

export function check2FAUsage() {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/account/settings/2fa/status`,
    method: 'GET',
  });
}

export function enable2FAStepOne() {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/account/settings/2fa/enable?step=1`,
    method: 'POST',
  });
}

export function enable2FAStepTwo(enableTwoFARequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/account/settings/2fa/enable?step=2`,
    method: 'POST',
    body: JSON.stringify(enableTwoFARequest),
  });
}

export function disable2FA() {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/account/settings/2fa/disable`,
    method: 'GET',
  });
}

export function requestResetPassword(email) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/forgot-password/${email}`,
    method: 'GET',
  });
}

export function resetPassword(resetPasswordRequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/forgot-password`,
    method: 'POST',
    body: JSON.stringify(resetPasswordRequest),
  });
}
export function subscribe(subscriptionRequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/subscribe`,
    method: 'POST',
    body: JSON.stringify(subscriptionRequest),
  });
}
export function retrieveProfileData() {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/secure/common/profileData`,
    method: 'GET',
  });
}
export function unsubscribe(unSubscriptionRequest) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/unsubscribe`,
    method: 'POST',
    body: JSON.stringify(unSubscriptionRequest),
  });
}
export function saveCookie(cookieRequest, userNameOrEmail) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/saveCookie/${userNameOrEmail}`,
    method: 'POST',
    body: JSON.stringify(cookieRequest),
  });
}
export function getEndpoints() {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/getEndpoints`,
    method: 'GET',
  });
}
export function getContent(endpoint, category) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/auth/getContent/${endpoint}/${category}`,
    method: 'GET',
  });
}
export function contactData(contactUs) {
  return sendRequest({
    url: `${config.url.API_BASE_URL}/public/contactMail`,
    method: 'POST',
    body: JSON.stringify(contactUs),
  });
}

export function getDarwinTnpscData() {
 
  return instance.get(
    `/darwin/secure/admin/dashboard/users/`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
}