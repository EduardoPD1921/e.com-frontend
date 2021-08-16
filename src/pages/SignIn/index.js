import React from 'react';

import Header from '../../components/Header';
import SignInForm from '../../components/SignInForm';

import { GithubOutlined, InstagramOutlined, TwitterOutlined, CopyrightOutlined } from '@ant-design/icons';

import { SignInSection, FooterSection, IconButtons, InfoLinks, CopyrightText } from './styles';


function SignIn() {
  const onSubmitForm = formValues => {
    console.log(formValues);
  };

  return (
    <SignInSection>
      <Header />

      <SignInForm
        onSubmitForm={onSubmitForm}
      />

      <FooterSection>
        <IconButtons>
          <a href="/">
            <GithubOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />
          </a>
          <InstagramOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />
          <TwitterOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />
        </IconButtons>
        <InfoLinks>
          Info • Ajuda • Marketing • Termos de uso • Política de privacidade • Código aberto
        </InfoLinks>
        <CopyrightText>
          <CopyrightOutlined style={{ marginRight: 5 }} /> 2021 E.com
        </CopyrightText>
      </FooterSection>
    </SignInSection>
  );
};

export default SignIn;