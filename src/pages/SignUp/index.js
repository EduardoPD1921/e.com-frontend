import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUpForm from '../../components/SignUpForm';

import { SignUpSection } from './styles';

function SignUp() {
  const onSubmitForm = formValues => {
    console.log(formValues);
  };

  return (
    <SignUpSection>
      <Header />

      <SignUpForm
        onSubmitForm={onSubmitForm} 
      />

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;