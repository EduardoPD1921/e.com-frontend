import React, { createContext, useState } from 'react';

const SignUpContext = createContext();

function SignUpProvider({ children }) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SignUpContext.Provider value={{ setIsSignUp, isSignUp }}>
      {children}
    </SignUpContext.Provider>
  );
};

export { SignUpContext, SignUpProvider };