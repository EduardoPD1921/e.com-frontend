import React, { createContext, useState } from 'react';
import api from '../api';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin(userCredentials) {
    const data = {
      email: userCredentials.email
    };

    api.post('/user/login', data)
      .then(resp => console.log(resp))
      .catch(error => console.log(error.response));
  };

  return (
    <Context.Provider value={{ handleLogin, authenticated }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };