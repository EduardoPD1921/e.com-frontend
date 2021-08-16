import React from 'react';

import LinkIcon from './LinkIcon';

import {
  GithubOutlined,
  TwitterOutlined,
  CopyrightOutlined,
  InstagramOutlined
} from '@ant-design/icons';

import {
  FooterSection,
  IconButtons,
  InfoLinks,
  CopyrightText
} from './styles';

function Footer() {
  return (
    <FooterSection>
      <IconButtons>
        <LinkIcon link="/" icon={<GithubOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />} />
        <LinkIcon link="/" icon={<InstagramOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />} />
        <LinkIcon link="/" icon={<TwitterOutlined style={{ fontSize: 25, margin: 10, color: '#efefef' }} />} />
      </IconButtons>
      <InfoLinks>
      Info • Ajuda • Marketing • Termos de uso • Política de privacidade • Código aberto
      </InfoLinks>
      <CopyrightText>
        <CopyrightOutlined style={{ marginRight: 5 }} /> 2021 E.com
      </CopyrightText>
    </FooterSection>
  );
};

export default Footer;