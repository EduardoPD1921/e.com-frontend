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
  FormInput,
  FormInputPassword
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
              requiredMark={false}
              name="signInForm"
              layout="vertical"
            >
              <Form.Item
                label={<label style={{ color: '#5f5f5f', fontFamily: 'robotoMedium' }}>E-mail</label>}
                name="email"
                rules={[{
                  required: true,
                  type: 'email',
                  message: 'Insira seu e-mail'
                }]}
              >
                <FormInput />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: '#5f5f5f', fontFamily: 'robotoMedium' }}>Senha</label>}
                name="password"
                rules={[{
                  required: true,
                  message: 'Insira sua senha'
                }]}
              >
                <FormInputPassword />
              </Form.Item>
            </Form>
          </FormInputs>
        </SignInForm>
      </SignInFormSection>
    </SignInSection>
  );
};

export default SignIn;