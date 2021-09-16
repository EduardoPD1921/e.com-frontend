import React, { useState, useEffect, useContext } from 'react';
import { LikeContext } from '../../Context/LikeContext';
import { useParams } from 'react-router-dom';

import api from '../../api';

import { Tag } from 'antd';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

import {
  Test,
  ProductInfoSection,
  ImageContainer,
  InfoContainer,
  MainInfo,
  ProductTitle,
  ProductPrice,
  StockText,
  TagContainer,
  ActionButtonsContainer,
  BuyAction,
  AddToCartAction,
  BookmarkProductAction
} from './styles';

// import productImage from '../../static/images/itemImage.png';

function Product() {
  const [productInfo, setProductInfo] = useState();

  const { id } = useParams();

  const { likedProducts } = useContext(LikeContext);

  useEffect(() => {
    api.get(`/product/getById/${id}`)
      .then(resp => setProductInfo(resp.data))
      .catch(error => console.log(error.response));
  });

  function renderLikedButton() {
    if (likedProducts.includes(id)) {
      return (
        <BookmarkProductAction>
          <HiHeart style={{ fontSize: 20, color: '#e0245e' }} />
        </BookmarkProductAction>
      );
    };

    return (
      <BookmarkProductAction>
        <HiOutlineHeart style={{ fontSize: 20, color: '#c8c8c8' }} />
      </BookmarkProductAction>
    );
  };

  function renderProductInfo() {
    if (productInfo) {
      return (
        <ProductInfoSection>
          <ImageContainer>
            <img src={productInfo.image} height={150} alt="product" />
          </ImageContainer>
          <InfoContainer>
            <MainInfo>
              <ProductTitle>
                {productInfo.title}
              </ProductTitle>
              <ProductPrice>
                {productInfo.price}
              </ProductPrice>
            </MainInfo>
            <StockText>
              Em estoque
            </StockText>
            <TagContainer>
              <Tag>Acessório</Tag>
              <Tag>Relógio</Tag>
            </TagContainer>
            <ActionButtonsContainer>
              <BuyAction onClick={() => console.log('test')}>Comprar</BuyAction>
              <AddToCartAction>Adicionar ao carrinho</AddToCartAction>
              {renderLikedButton()}
            </ActionButtonsContainer>
          </InfoContainer>
        </ProductInfoSection>
      );
    };
  };

  return (
    <>
      <Navbar />

      <Test>
        {renderProductInfo()}
      </Test>
    </>
  );
};

export default Product;