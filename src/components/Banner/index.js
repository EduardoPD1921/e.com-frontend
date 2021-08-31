import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

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
  const { authenticated } = useContext(AuthContext);

  function renderActionButtons() {
    if (authenticated) {
      return (
        <ActionButton
          size="large"
          product={true}
          shape="round"
          auth={true}
        >
          Produtos
        </ActionButton>
      );
    };

    return (
      <>
        <ActionButton size="large" product={true} shape="round">Produtos</ActionButton>
        <ActionButton href="/signIn" size="large" shape="round">Entrar</ActionButton>
      </>
    );
  };

  return (
    <BannerSection>
      <BannerText>
        <BannerTitle>Compre os melhores produtos disponíveis no mundo inteiro</BannerTitle>
        <BannerSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis lorem at ipsum vestibulum iaculis. Ut a faucibus lectus. Curabitur quis elementum tortor.</BannerSubtitle>
        <BannerButtons>
          {/* <ActionButton size="large" product={true} shape="round">Produtos</ActionButton>
          <ActionButton href="/signIn" size="large" shape="round">Entrar</ActionButton> */}
          {renderActionButtons()}
        </BannerButtons>
      </BannerText>
      <BannerArt>
        <BannerImage src={tvImage} />
      </BannerArt>
    </BannerSection>
  );
};

export default Banner;