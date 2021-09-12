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