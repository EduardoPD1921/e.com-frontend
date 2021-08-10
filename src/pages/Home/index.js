import React, { useState } from 'react';

import Header from '../../components/Header';
import ResponsiveHeader from '../../components/Header/ResponsiveHeader';

import {
  Banner,
  BannerText,
  BannerTitle,
  BannerSubtitle,
  BannerButtons,
  ActionButton,
  BannerArt,
  BannerImage
} from './styles';

import tvImage from '../../static/images/tvImage.png';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <ResponsiveHeader isOpen={mobileMenuOpen} />

      <Banner>
        <BannerText>
          <BannerTitle>Compre os melhores produtos disponíveis no mundo inteiro</BannerTitle>
          <BannerSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis lorem at ipsum vestibulum iaculis. Ut a faucibus lectus. Curabitur quis elementum tortor.</BannerSubtitle>
          <BannerButtons>
            <ActionButton size="large" product={true} shape="round">Produtos</ActionButton>
            <ActionButton size="large" shape="round">Entrar</ActionButton>
          </BannerButtons>
        </BannerText>
        <BannerArt>
          <BannerImage src={tvImage} />
        </BannerArt>
      </Banner>
    </>
  );
};

export default Home;