import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Form } from 'antd';
import { MobileOutlined, ShopOutlined, MessageOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import {
  SignUpSection,
  FormSection,
  FormShape,
  FormMarketingInfo,
  FormInputs,
  MarketingSection,
  TextCard,
  IconShape,
  CardTitle,
  CardText,
  CardInfo,
  FormInput,
  FormLabel
} from './styles';

function SignUp() {
  return (
    <SignUpSection>
      <Header />

      <FormSection>
        <FormShape>
          <FormMarketingInfo>
            <MarketingSection>
              <TextCard>
                <IconShape>
                  <MobileOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Baixe nosso app
                  </CardTitle>
                  <CardInfo>
                    Faça o download do nosso app, disponível na app store e na play store.
                  </CardInfo>
                </CardText>
              </TextCard>
              <TextCard>
                <IconShape>
                  <ShopOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Produtos internacionais
                  </CardTitle>
                  <CardInfo>
                    Compre produtos dentro e fora do país em lojas verificadas.
                  </CardInfo>
                </CardText>
              </TextCard>
              <TextCard>
                <IconShape>
                  <MessageOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Converse com nosso suporte
                  </CardTitle>
                  <CardInfo>
                    Caso tenha qualquer dúvida, nosso suporte estará disponível para ajudá-lo.
                  </CardInfo>
                </CardText>
              </TextCard>
            </MarketingSection>
          </FormMarketingInfo>
          <FormInputs>
            <Form
              requiredMark={false}
              name="signUpForm"
              layout="vertical"
              // initialValues={}
              // onFinish={}
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
                {/* <FormInput placeholder="Digite seu e-mail" /> */}
                <FormInput
                  prefix={<MailOutlined style={{ fontSize: 15, color: '#bfbfbf', marginRight: 5 }} />}
                  placeholder="Digite seu e-mail" 
                />
              </Form.Item>
              <Form.Item
                label={<FormLabel></FormLabel>}
              >

              </Form.Item>
            </Form>
          </FormInputs>
        </FormShape>
      </FormSection>

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;