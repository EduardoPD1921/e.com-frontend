import React from 'react';

import api from '../../api';

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
  FormInputs,
  FormInput,
  DateInput,
  PasswordInput,
  FormLabel,
  SubmitButton
} from './styles';

function SignUpForm() {
  const onSubmitForm = formValues => {
    const { name, email, birthDate, password } = formValues;
    const formData = {
      name,
      email,
      birthDate: birthDate._d,
      password
    };

    api.post('/user/store', formData)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
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
          <Form
            requiredMark={false}
            name="signUpForm"
            layout="vertical"
            onFinish={onSubmitForm}
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
            >
              <FormInput
                prefix={<MailOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                placeholder="Digite seu e-mail" 
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
              />
            </Form.Item>
            <Form.Item
              label={<FormLabel>Senha</FormLabel>}
              name="password"
              rules={[{
                required: true,
                message: 'Insira sua senha'
              }]}
            >
              <PasswordInput
                prefix={<LockOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                placeholder="Digite sua senha" 
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
              <Checkbox style={{ color: '#5f5f5f', marginLeft: 20 }}>Eu concordo com os <a href="/">termos de uso</a></Checkbox>
            </Form.Item>
            <Form.Item>
              <SubmitButton htmlType="submit">Cadastrar</SubmitButton>
            </Form.Item>
          </Form>
        </FormInputs>
      </FormShape>
    </FormSection>
  );
};

export default SignUpForm;