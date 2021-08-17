import React from 'react';

import { Form, Checkbox, Divider } from 'antd';

import formIllustration from '../../static/images/formIllustration.svg';

import {
  SignInFormSection,
  SignInFormArea,
  SignInSection,
  FormTitle,
  FormIllustration,
  FormInputs,
  FormInput,
  FormInputPassword,
  SubmitButton,
  FormExtraInfo,
  FormLink
} from './styles';

function SignInForm({ onSubmitForm }) {
  return (
    <SignInFormSection>
      <SignInFormArea>
        <FormTitle>Iniciar sessão de usuário</FormTitle>
        <SignInSection>
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
              <FormExtraInfo>
                <div style={{ color: '#5f5f5f' }}>
                  Não tem uma conta? <FormLink href="/signUp">Cadastre-se</FormLink>
                </div>
                <Divider style={{ fontSize: 12, color: '#5f5f5f', margin: 5 }}>ou</Divider>
                <FormLink href="/">Entrar como loja</FormLink>
              </FormExtraInfo>
            </Form>
          </FormInputs>
        </SignInSection>
      </SignInFormArea>
    </SignInFormSection>
  );
};

export default SignInForm;