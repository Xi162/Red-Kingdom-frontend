import React, { createContext, useState, useEffect } from "react";

// Create a new context
export const LoginContext = createContext();

// Create a provider component
export function LoginProvider({ children }) {
  // State to store the login status and user information
  const storedLoginState = localStorage.getItem("loginState");
  const initialLoginState = storedLoginState
    ? JSON.parse(storedLoginState)
    : {
        userID: null,
        username: null,
        token: null,
        lastLogin: null,
      };
  const [loginState, setLoginState] = useState(initialLoginState);
  if (Date.now() - loginState.lastLogin > 1000 * 60 * 60) {
    setLoginState({
      userID: null,
      username: null,
      token: null,
      lastLogin: Date.now(),
    });
  }

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify(loginState));
  }, [loginState]);

  // Provide the login state, toggle function, and update function to the children components
  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {children}
    </LoginContext.Provider>
  );
}
