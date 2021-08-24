import React, { useEffect, useContext } from 'react';
import { Context } from '../../Context/SignUpContext';

import { message } from 'antd';

import Carousel from 'react-multi-carousel';

import {
  HomeSection,
  CardSectionTitle
} from './styles';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

import itemImage from '../../static/images/itemImage.png';

function Home() {
  const { setIsSignUp, isSignUp } = useContext(Context);

  useEffect(() => {
    if (isSignUp) {
      message.success('Conta criada com sucesso!');

      setIsSignUp(false);
    };
  });
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <HomeSection>
      <Header />
      <Banner />

      <CardSectionTitle>
        Produtos novos
      </CardSectionTitle>
      <Carousel
        responsive={responsive}
        infinite={true}
      >
        <ProductCard
          image={itemImage}
          title="Relógio Rolex"
          price="R$1450,00" 
        />
      </Carousel>

      <Footer />
    </HomeSection>
  );
};

export default Home;