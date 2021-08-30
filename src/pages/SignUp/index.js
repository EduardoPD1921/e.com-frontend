import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SignUpForm from '../../components/SignUpForm';

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