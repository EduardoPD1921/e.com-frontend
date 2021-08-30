import React from 'react';

import Navbar from '../../components/Navbar';
import SignInForm from '../../components/SignInForm';
import Footer from '../../components/Footer';

import { SignInSection } from './styles';


function SignIn() {
  return (
    <SignInSection>
      <Navbar />

      <SignInForm />

      <Footer />
    </SignInSection>
  );
};

export default SignIn;