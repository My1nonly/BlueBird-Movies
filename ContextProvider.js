import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGoogleLogin = () => {
    // Add your sign-in with Google logic here
    // For example, you can use a library like Firebase Authentication

    // Simulating a successful login
    setLoggedIn(true);
  };

  return (
    <Context.Provider value={{ GoogleLogin: handleGoogleLogin, loggedIn }}>
      {children}
    </Context.Provider>
  );

  
};

export { Context, ContextProvider };