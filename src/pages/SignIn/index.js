import React from 'react';

import Navbar from '../../components/Navbar';
import SignInForm from '../../components/SignInForm';
import Footer from '../../components/Footer';

import { SignInSection } from './styles';


function SignIn() {
  const onSubmitForm = formValues => {
    console.log(formValues);
  };

  return (
    <SignInSection>
      <Navbar />

      <SignInForm
        onSubmitForm={onSubmitForm}
      />

      <Footer />
    </SignInSection>
  );
};

export default SignIn;