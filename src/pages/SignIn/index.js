import React from 'react';

import Header from '../../components/Header';
import SignInForm from '../../components/SignInForm';
import Footer from '../../components/Footer';

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

      <Footer />
    </SignInSection>
  );
};

export default SignIn;