import React from 'react';
// import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import {
  Test,
  ProductInfoSection,
  ImageContainer,
  InfoContainer,
  MainInfo,
  ProductTitle,
  ProductPrice,
  StockText
} from './styles';

import productImage from '../../static/images/itemImage.png';

function Product() {
  return (
    <>
      <Navbar />

      <Test>
        <ProductInfoSection>
          <ImageContainer>
            <img src={productImage} height={250} alt="product" />
          </ImageContainer>
          <InfoContainer>
            <MainInfo>
              <ProductTitle>
                Relógio Rolex
              </ProductTitle>
              <ProductPrice>
                R$1500,00
              </ProductPrice>
            </MainInfo>
            <StockText>
              Em estoque
            </StockText>
          </InfoContainer>
        </ProductInfoSection>
      </Test>
    </>
  );
};

export default Product;