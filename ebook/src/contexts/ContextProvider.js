import React, { useState, useEffect } from 'react';
import { StateContext } from '../../src/contexts/StateContext';
import { getEndpoints } from '../../src/api/Api';
//import { ShowAlert } from '../components';
import { ACCESS_TOKEN, ADMIN_TOKEN, HR_TOKEN, CLIENT_TOKEN, FINANCIER_TOKEN, EMPLOYEE_TOKEN } from '../../src/config/Config';


const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#0b77c2');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [contentEndpoints, setContentEndpoints] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState('');
  const [language, setLanguage] = useState('EN');
  
  {/*useEffect(() => {
    getEndpoints()
      .then((res) => {
        if (res.data === null) {
          //<ShowAlert message={res.message} type="error" />;
        } else {
          <ShowAlert message={res.message} type="success" />;
          setContentEndpoints(res.data);
        }
      })
      .catch((error) => {
        if (error.status === 401) {
          <ShowAlert
            message="Your are not eligible to access this endpoint"
            type="error"
          />;
        } else {
          <ShowAlert message={error.message} type="error" />;
        }
      });
  }, []);*/}
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        contentEndpoints,
        setIsLoggedIn,
        isLoggedIn,
        role,
        setRole,
        language,
        setLanguage
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
