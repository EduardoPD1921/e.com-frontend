import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import { Redirect } from 'react-router-dom';

import api from '../../api';

import { Form, Checkbox, Divider, message } from 'antd';

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
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { handleAuth, authenticated } = useContext(AuthContext);

  function handleLogin({ email, password }) {
    setIsLoading(true);

    const data = {
      email,
      password
    };

    api.post('/user/login', data)
      .then(resp => {
        setIsLoading(false);
        handleAuth(resp.data.token);
      })
      .catch(error => onErrorLoginHandler(error.response.data));
  };

  function onErrorLoginHandler(errorData) {
    resetStates();

    switch (errorData.code) {
      case 'wrong-email':
        return setEmailError(errorData.message);
      case 'wrong-password':
        return setPasswordError(errorData.message);
      default:
        message.error('Erro interno');
        console.log(errorData);
    };
  };

  function resetStates() {
    setIsLoading(false);
    setEmailError('');
    setPasswordError('');
  };

  function clearCustomErrors(formError) {
    formError.errorFields.map(error => {
      if (error.name[0] === 'email') {
        return setEmailError('');
      };

      if (error.name[0] === 'password') {
        return setPasswordError('');
      };

      return {};
    });
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
              onFinishFailed={clearCustomErrors}
            >
              <Form.Item
                label={<FormLabel>E-mail</FormLabel>}
                name="email"
                rules={[{
                  required: true,
                  type: 'email',
                  message: 'Insira seu e-mail'
                }]}
                {...emailError && {
                  help: emailError,
                  validateStatus: 'error'
                }}
              >
                <FormInput disabled={isLoading} />
              </Form.Item>
              <Form.Item
                label={<FormLabel>Senha</FormLabel>}
                name="password"
                rules={[{
                  required: true,
                  message: 'Insira sua senha'
                }]}
                {...passwordError && {
                  help: passwordError,
                  validateStatus: 'error'
                }}
              >
                <FormInputPassword disabled={isLoading} />
              </Form.Item>
              <Form.Item
                valuePropName="checked" name="remember"
              >
                <Checkbox disabled={isLoading} style={{ color: '#5f5f5f' }}>Lembrar-me</Checkbox>
              </Form.Item>
              <Form.Item>
                <SubmitButton loading={isLoading} htmlType="submit">Entrar</SubmitButton>
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