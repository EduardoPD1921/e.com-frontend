import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUpForm from '../../components/SignUpForm';

import { SignUpSection } from './styles';

function SignUp() {
  return (
    <SignUpSection>
      <Header />

      <SignUpForm />

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;