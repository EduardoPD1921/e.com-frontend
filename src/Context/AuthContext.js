import React, { createContext, useState } from 'react';

const Context = createContext();

function AuthProvider({ children }) {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };