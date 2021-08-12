import React from 'react';

// import Carousel from 'react-multi-carousel';

import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import {
  HomeSection,
  CardSectionTitle,
  ProductCard,
  CardActions,
  CardInfo,
  CardShow,
  CardTitle,
  CardPrice
} from './styles';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import itemImage from '../../static/images/itemImage.png';

function Home() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1
  //   }
  // };

  // cor do coração #e0245e

  return (
    <HomeSection>
      <Header />
      <Banner />

      <CardSectionTitle>
        Produtos novos
      </CardSectionTitle>

      <ProductCard>
        <CardActions>
          <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} />
          <ShoppingCartOutlined style={{ fontSize: 20, color: '#c8c8c8' }} />
        </CardActions>
        <CardInfo>
          <img src={itemImage} width={150} alt="Relógio" />
          <CardTitle>
            Relógio Rolex
          </CardTitle>
          <CardPrice>
            R$120,00
          </CardPrice>
        </CardInfo>
        <CardShow>
          Ver mais
        </CardShow>
      </ProductCard>
    </HomeSection>
  );
};

export default Home;