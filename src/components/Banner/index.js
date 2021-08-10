import React from 'react';

import {
  BannerSection,
  BannerText,
  BannerTitle,
  BannerSubtitle,
  BannerButtons,
  ActionButton,
  BannerArt,
  BannerImage
} from './styles';

import tvImage from '../../static/images/tvImage.png';

function Banner() {
  return (
    <BannerSection>
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
    </BannerSection>
  );
};

export default Banner;