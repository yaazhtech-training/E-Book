import axios from 'axios';
import {
  ACCESS_TOKEN,
  config,
} from '../config/Config';

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

export function saveOrderDataBff(orderRequesthareKrishnaTraders) {
  return instance.post("/hareKrishnaTraders/order/placeOrder", orderRequesthareKrishnaTraders,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function saveGoldLoanDataBff(loanRequest) {
  return instance.put("/gvg/common/updateAppliedFor", loanRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function retrievehareKrishnaTradersOrder(email) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/hareKrishnaTraders/order/orders/${email}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function hareKrishnaTradersOrderStatusUpdate(orderId, payload) {
  // alert("userName!!!"+clientUserName)
  return instance.put(`/hareKrishnaTraders/order/updateOrderStatus/${orderId}`, payload, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function retrieveGvgPlan(email) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/gvg/plan/plan/${email}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function retrieveHareKrishnaInventoryData(email) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/hareKrishnaTraders/public/idp/getProductListCategory/${email}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function saveOrUpdateInvoiceData(taxInvoiceRequest) {
  return instance.post("hareKrishnaTraders/secure/admin/saveOrUpdateInvoiceData", taxInvoiceRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}

export function savePlanDataBff(orderRequest) {
  return instance.post("gvg/plan/choosePlan", orderRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function saveGoldLoanData(loanRequest) {
  return instance.post("gvg/plan/choosePlan", loanRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function retrieveUserData() {
  return instance.get("hareKrishnaTraders/order/dashboard/pupil/order", {
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
  });
}
export function retriveOrgCouponData() {
  return instance.get("hareKrishnaTraders/public/idp/getOrgCouponData", {
    headers: {
      "Content-type": "application/json",
      
    },
  });
}

export function retriveAdditionalOffer(orderRequesthareKrishnaTraders) {
  return instance.post("/hareKrishnaTraders/public/idp/additionalOffer", orderRequesthareKrishnaTraders,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function getGvgOrders() {
 
  return instance.get(
    `/hareKrishnaTraders/secure/admin/dashboard/users/order`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
}
export function gethareKrishnaTradersData(category) {
 
  return instance.get(
    `/hareKrishnaTraders/secure/admin/dashboard/users/${category}`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
}
export function gethareKrishnaTradersDataByCategory(category) {
 
  return instance.get(
    `/hareKrishnaTraders/secure/admin/dashboard/users/byCategory/${category}`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
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
export function retrievehareKrishnaTradersShopOrders(email) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/hareKrishnaTraders/order/orders/${email}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function validateCoupon(coupon,email) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/hareKrishnaTraders/order/validateCoupon/${coupon}/${email}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function retrievehareKrishnaTradersByCategory(category) {
  // alert("userName!!!"+clientUserName)
  return instance.get(`/hareKrishnaTraders/secure/admin/dashboard/${category}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}
export function getGvgPlan() {
 
  return instance.get(
    `/gvg/secure/admin/dashboard/users/plan`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
}
export function getGvgOrderPlan() {
 
  return instance.get(
    `/gvg/secure/admin/dashboard/users/orderAndPlan`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
      },
    },
  );
}


export function createProduct(productRequest) {
  return instance.post("hareKrishnaTraders/secure/admin/addToProduct", productRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function updateProduct(productRequest) {
  return instance.put(`hareKrishnaTraders/secure/admin/updateProduct/${productRequest._id}`, productRequest,{
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        : null,
    },
    
  });
  
}
export function deleteProductById(productId) {
  // alert("userName!!!"+clientUserName)
  return instance.delete(`hareKrishnaTraders/secure/admin/deleteProduct/${productId}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem(ACCESS_TOKEN)
        ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        : null,
    },
  });
}