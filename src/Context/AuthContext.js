import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `${JSON.parse(token)}`;
      setAuthenticated(true);
    };
  }, []);

  function handleAuth(token) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `${token}`;
    setAuthenticated(true);
  };

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    window.location.replace('/signIn');
  };

  return (
    <AuthContext.Provider value={{ authenticated, handleAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };