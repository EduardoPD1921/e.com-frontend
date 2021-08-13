import React from 'react';

import Header from '../../components/Header';

import formIllustration from '../../static/images/formIllustration.svg';

import { Form } from 'antd';

import {
  SignInSection,
  SignInFormSection,
  SignInForm,
  FormIllustration,
  FormInputs,
  FormInput
} from './styles';

function SignIn() {
  return (
    <SignInSection>
      <Header />

      <SignInFormSection>
        <SignInForm>
          <FormIllustration>
            <img src={formIllustration} width={250} alt="Ilustração do form" />
          </FormIllustration>
          <FormInputs>
            <Form
              layout="vertical"
            >
              <Form.Item label={<label style={{ color: '#5f5f5f', fontFamily: 'robotoMedium' }}>Test</label>}>
                <FormInput />
              </Form.Item>
            </Form>
          </FormInputs>
        </SignInForm>
      </SignInFormSection>
    </SignInSection>
  );
};

export default SignIn;