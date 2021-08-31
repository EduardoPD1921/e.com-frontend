import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import { Redirect } from 'react-router-dom';

import api from '../../api';

import { Form, Checkbox, Divider } from 'antd';

import formIllustration from '../../static/images/formIllustration.svg';

import {
  SignInFormSection,
  SignInFormArea,
  SignInSection,
  FormTitle,
  FormIllustrationSection,
  FormIllustration,
  FormInputs,
  FormInput,
  FormInputPassword,
  FormLabel,
  SubmitButton,
  FormExtraInfo,
  FormLink
} from './styles';

function SignInForm() {
  const { handleAuth, authenticated } = useContext(AuthContext);

  function handleLogin({ email, password }) {
    const data = {
      email,
      password
    };

    api.post('/user/login', data)
      .then(resp => {
        handleAuth(resp.data.token);
      })
      .catch(error => console.log(error.response));
  };

  function redirectToHome() {
    if (authenticated) {
      return <Redirect to="/home" />
    };
  };

  return (
    <SignInFormSection>
      <SignInFormArea>
        <FormTitle>Iniciar sessão de usuário</FormTitle>
        <SignInSection>
          <FormIllustrationSection>
            <FormIllustration src={formIllustration} alt="Homem no celular" />
          </FormIllustrationSection>
          <FormInputs>
            <Form
              requiredMark={false}
              name="signInForm"
              layout="vertical"
              initialValues={{ remember: false }}
              onFinish={handleLogin}
            >
              <Form.Item
                label={<FormLabel>E-mail</FormLabel>}
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
                label={<FormLabel>Senha</FormLabel>}
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
                <FormLink href="/">Página inicial</FormLink>
              </FormExtraInfo>
            </Form>
          </FormInputs>
        </SignInSection>
      </SignInFormArea>
      {redirectToHome()}
    </SignInFormSection>
  );
};

export default SignInForm;