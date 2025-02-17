const prod = {
  url: {
    API_BASE_URL: 'https://backend.yaazhtech.com/commonBff',
    API_BASE_URL_ACTUATOR: 'https://backend.yaazhtech.com/commonBff/manage',
    API_GATE_URL: 'https://api.phonepe.com/apis/hermes',
    API_REDIRECT_URL: 'https://backend.yaazhtech.com/services',
    API_CALLBACK_URL: 'https://backend.yaazhtech.com:8084/public/paymentUpdate',
  },
};



const dev = {
  url: {
    API_BASE_URL: '//localhost:8079',
    API_BASE_URL_ACTUATOR: '//localhost:8079/manage',
    API_GATE_URL: 'https://api.phonepe.com/apis/hermes',
    API_REDIRECT_URL: 'https://yaazhtech.com/services',
    API_CALLBACK_URL: 'https://yaazhtech.com/services/paymentUpdate',

  },
};
export const merchantId = 'M1ATKTSWLUW4';
export const transactionTrackingIdCons="transactionTrackingId"
export const salt = 'cb6843ed-09ab-4454-8088-d5a46bf5ef9c';
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
export const ACCESS_TOKEN = 'accessToken';
export const ADMIN_TOKEN = 'adminToken';
export const EMPLOYEE_TOKEN = 'employeeToken';
export const SHOPADMIN_TOKEN = 'shopAdminToken';
export const CLIENT_TOKEN = 'clientToken';
export const FINANCIER_TOKEN = 'financierToken';
export const HR_TOKEN = 'hrToken';
export const COOKIE_PREF = 'cookie_pref';
export const CONTENT_ENDPOINTS = 'CONTENT_ENDPOINTS';
export const ADMIN = "ADMIN";
export const USER = "USER"; // when apply for anything basic access
export const HR = "HR";
export const EMPLOYEE = "EMPLOYEE"; // when you become probation or hire
export const EMPLOYER = "EMPLOYER";
export const CLIENT = "CLIENT";
export const PUPIL = "PUPIL";
export const USERNAMEWITHMAIL = "USERNAMEWITHMAIL";
export const SHOPADMIN = "SHOPADMIN";
export const Language ='en';
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 16;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const MOBILE_EXACT_LENGTH = 10;
export const NAME_MIN_LENGTH = 1;
export const AADHAR_EXACT_LENGTH = 12;
export const PAN_EXACT_LENGTH = 10;
