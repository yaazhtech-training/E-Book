import React, { createContext, useContext, useState } from 'react';
import {
  transactionTrackingIdCons
} from "../config/Config";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem('accessToken') || '',
  transactionTrackingId: localStorage.getItem(transactionTrackingIdCons) || ''
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
