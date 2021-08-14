import React from 'react';

import { Form, Checkbox } from 'antd';

import formIllustration from '../../static/images/formIllustration.svg';

import {
  SignInFormSection,
  SignInFormArea,
  FormIllustration,
  FormInputs,
  FormInput,
  FormInputPassword,
  SubmitButton
} from './styles';

function SignInForm({ onSubmitForm }) {
  return (
    <SignInFormSection>
      <SignInFormArea>
        <FormIllustration>
          <img src={formIllustration} width={300} alt="Homem no celular" />
        </FormIllustration>
        <FormInputs>
          <Form
            requiredMark={false}
            name="signInForm"
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onSubmitForm}
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
            <Form.Item
              valuePropName="checked" name="remember"
            >
              <Checkbox style={{ color: '#5f5f5f' }}>Lembrar-me</Checkbox>
            </Form.Item>
            <Form.Item>
              <SubmitButton htmlType="submit">Entrar</SubmitButton>
            </Form.Item>
          </Form>
        </FormInputs>
      </SignInFormArea>
    </SignInFormSection>
  );
};

export default SignInForm;