import React from 'react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SignUpForm from '../../components/auth/SignUpForm';

import { SignUpSection } from './styles';

function SignUp() {
  return (
    <SignUpSection>
      <Navbar />

      <SignUpForm />

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;