import React, { useState, useContext } from 'react';
import { SignUpContext } from '../../../Context/SignUpContext';
import { Redirect } from 'react-router-dom';

import api from '../../../api';

import InfoCard from './InfoCard';

import { Form, Checkbox } from 'antd';
import { 
  MobileOutlined,
  ShopOutlined,
  MessageOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined
} from '@ant-design/icons';

import {
  FormSection,
  FormShape,
  FormMarketingInfo,
  MarketingSection,
  FormTitle,
  FormInputs,
  FormInput,
  DateInput,
  PasswordInput,
  FormLabel,
  SubmitButton
} from './styles';

function SignUpForm() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { setIsSignUp } = useContext(SignUpContext);

  const onSubmitForm = formValues => {
    setIsLoading(true);

    const { name, email, birthDate, password } = formValues;
    const formData = {
      name,
      email,
      birthDate: birthDate._d,
      password
    };

    api.post('/user/store', formData)
      .then(resp => onSubmitSuccess())
      .catch(error => onSubmitError(error.response.data));
  };

  const onSubmitError = errorData => {
    resetStates();

    errorData.map(error => {
      switch (error.code) {
        case 'short-password':
          return setPasswordError(error.message);
        case 'email-already-in-use':
          return setEmailError(error.message);
        default:
          return console.log(error);
      }
    });
  };

  const onSubmitSuccess = () => {
    setIsSignUp(true);
    setRedirect(true);
  };

  const resetStates = () => {
    setIsLoading(false);
    setEmailError('');
    setPasswordError('');
  };

  const clearCustomErrors = formError => {
    formError.errorFields.map(error => {
      if (error.name[0] === 'email') {
        return setEmailError('');
      };

      if (error.name[0] === 'password') {
        return setPasswordError('');
      }

      return {};
    });
  };

  return (
    <FormSection>
      <FormShape>
        <FormMarketingInfo>
          <MarketingSection>
            <InfoCard
              icon={<MobileOutlined />}
              title="Baixe nosso app"
              info="Faça o download do nosso app, disponível na app store e na play store." 
            />
            <InfoCard
              icon={<ShopOutlined />}
              title="Produtos internacionais"
              info="Compre produtos dentro e fora do país em lojas verificadas." 
            />
            <InfoCard
              icon={<MessageOutlined />}
              title="Converse com nosso suporte"
              info="Caso tenha qualquer dúvida, nosso suporte estará disponível para ajudá-lo." 
            />
          </MarketingSection>
        </FormMarketingInfo>
        <FormInputs>
          <FormTitle>Cadastro de usuário</FormTitle>
          <Form
            requiredMark={false}
            name="signUpForm"
            layout="vertical"
            onFinish={onSubmitForm}
            onFinishFailed={clearCustomErrors}
          >
            <Form.Item
              label={<FormLabel>Nome</FormLabel>}
              name="name"
              rules={[{
                required: true,
                message: 'Insira seu nome'
              }]}
            >
              <FormInput
                prefix={<UserOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                placeholder="Digite seu nome"
                disabled={isLoading}
              />
            </Form.Item>
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
              <FormInput
                prefix={<MailOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                placeholder="Digite seu e-mail"
                disabled={isLoading} 
              />
            </Form.Item>
            <Form.Item
              label={<FormLabel>Data de nascimento</FormLabel>}
              name="birthDate"
              rules={[{
                required: true,
                type: 'date',
                message: 'Insira sua data de nascimento'
              }]}
            >
              <DateInput
                placeholder="Escolha sua data de nascimento" 
                format="DD/MM/YYYY"
                disabled={isLoading}
              />
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
              <PasswordInput
                prefix={<LockOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                placeholder="Digite sua senha"
                disabled={isLoading}
              />
            </Form.Item>
            <Form.Item
              name="termsUse"
              valuePropName="checked"
              rules={[{
                required: true,
                message: 'Aceite os termos'
              }]}
            >
              <Checkbox 
                style={{ color: '#5f5f5f' }}
                disabled={isLoading}
              >
                Eu concordo com os <a href="/">termos de uso</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <SubmitButton 
                htmlType="submit"
                loading={isLoading}
              >
                Cadastrar
              </SubmitButton>
            </Form.Item>
          </Form>
        </FormInputs>
      </FormShape>
      {redirect ? <Redirect to="/home" /> : null}
    </FormSection>
  );
};

export default SignUpForm;