import React from 'react';

import Header from '../../components/Header';

import {
  SignInSection,
  SignInFormSection,
  SignInForm
} from './styles';

function SignIn() {
  return (
    <SignInSection>
      <Header />

      <SignInFormSection>
        <SignInForm>
          test
        </SignInForm>
      </SignInFormSection>
    </SignInSection>
  );
};

export default SignIn;