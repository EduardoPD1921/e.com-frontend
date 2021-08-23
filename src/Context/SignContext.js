import React, { createContext, useState } from 'react';

const Context = createContext();

function SignContext({ children }) {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignedUp = () => {
    setIsSignedUp(true);
  };

  return (
    <Context.Provider value={{ handleSignedUp, isSignedUp }}>
      {children}
    </Context.Provider>
  );
};

export { Context, SignContext };