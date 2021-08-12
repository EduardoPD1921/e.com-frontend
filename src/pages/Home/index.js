import React, { useState } from 'react';

import Carousel from 'react-multi-carousel';

import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';

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
  const [liked, setLiked] = useState(false);
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

  const renderLikedProduct = () => {
    if (liked) {
      return <HeartFilled onClick={() => setLiked(false)} style={{ color: '#e0245e', fontSize: 15 }} />
    };

    return <HeartOutlined onClick={() => setLiked(true)} style={{ color: '#c8c8c8', fontSize: 15 }} />
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
        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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

        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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

        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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

        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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
        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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
        <ProductCard>
          <CardActions>
            {/* <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} /> */}
            {renderLikedProduct()}
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
      </Carousel>

      {/* <ProductCard>
        <CardActions>
          <HeartOutlined style={{ fontSize: 15, color: '#c8c8c8' }} />
          {renderLikedProduct()}
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
      </ProductCard> */}
    </HomeSection>
  );
};

export default Home;