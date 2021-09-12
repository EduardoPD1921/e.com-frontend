import React, { useEffect, useContext, useState } from 'react';
import { SignUpContext } from '../../Context/SignUpContext';

import api from '../../api';

import { message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Carousel from 'react-multi-carousel';

import {
  HomeSection,
  CardSectionTitle
} from './styles';

import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

function Home() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { setIsSignUp, isSignUp } = useContext(SignUpContext);

  useEffect(() => {
    if (isSignUp) {
      message.success('Conta criada com sucesso!');
      setIsSignUp(false);
    };
  });

  useEffect(() => {
    api.get('/product/getLastAdded')
      .then(resp => {
        setProducts(resp.data);
        setIsLoading(false);
      })
      .catch(error => {
        message.error('Erro interno');
        console.log(error.response);
      });
  }, []);
  
  const responsive = {
    screen1: {
      breakpoint: { max: 3000, min: 1550 },
      items: 5,
      slidesToSlide: 3
    },
    screen2: {
      breakpoint: { max: 1550, min: 1300 },
      items: 4,
      slidesToSlide: 2
    },
    screen3: {
      breakpoint: { max: 1300, min: 920 },
      items: 3,
      slidesToSlide: 2
    },
    screen4: {
      breakpoint: { max: 920, min: 620},
      items: 2,
      slidesToSlide: 2
    },
    screen5: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  function renderProducts() {
    if (isLoading) {
      return <LoadingOutlined />
    };

    return products.map(product => {
      return (
        <ProductCard
          id={product._id}
          title={product.title}
          image={product.image}
          price={product.price}
          tags={product.tags} 
        />
      );
    });
  };

  return (
    <HomeSection>
      <Navbar />
      <Banner />
      <CardSectionTitle>
        Produtos novos
      </CardSectionTitle>
      <Carousel
        responsive={responsive}
        infinite={true}
      >
        {renderProducts()}
      </Carousel>

      <Footer />
    </HomeSection>
  );
};

export default Home;