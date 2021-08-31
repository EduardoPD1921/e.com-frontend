import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    };
  }, []);

  function handleAuth(token) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ handleAuth, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };