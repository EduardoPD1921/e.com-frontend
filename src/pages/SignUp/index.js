import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  SignUpSection,
  FormSection,
  FormShape,
  FormMarketingInfo,
  FormInputs
} from './styles';

function SignUp() {
  return (
    <SignUpSection>
      <Header />

      <FormSection>
        <FormShape>
          <FormMarketingInfo>
            test
          </FormMarketingInfo>
          <FormInputs>
            test
          </FormInputs>
        </FormShape>
      </FormSection>

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;