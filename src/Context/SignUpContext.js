import React, { createContext, useState } from 'react';

const Context = createContext();

function SignUpContext({ children }) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Context.Provider value={{ setIsSignUp, isSignUp }}>
      {children}
    </Context.Provider>
  );
};

export { Context, SignUpContext };