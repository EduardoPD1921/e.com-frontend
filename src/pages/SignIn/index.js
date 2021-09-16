import React from 'react';

import Navbar from '../../components/layout/Navbar';
import SignInForm from '../../components/auth/SignInForm';
import Footer from '../../components/layout/Footer';

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