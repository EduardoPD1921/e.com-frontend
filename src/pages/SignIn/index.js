import React from 'react';

import Header from '../../components/Header';
import SignInForm from '../../components/SignInForm';

import { SignInSection } from './styles';

function SignIn() {
  const onSubmitForm = formValues => {
    console.log(formValues);
  };

  return (
    <SignInSection>
      <Header />

      <SignInForm
        onSubmitForm={onSubmitForm}
      />
    </SignInSection>
  );
};

export default SignIn;