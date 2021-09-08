import React from 'react';

import { InputNumber, Divider } from 'antd';

import {
  CartProductCardContainer,
  CardInfo,
  CardTitle,
  CardTags,
  CardPrice
} from './styles';

function CardProductCart({ image, title, tags, price }) {
  return (
    <>
      <Divider />
      <CartProductCardContainer>
        <img src={image} width={100} alt="Product" />
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardTags>{/* Tags */}</CardTags>
          <InputNumber
            defaultValue={1}
            style={{ width: 70, marginTop: 15 }} 
          />
        </CardInfo>
        <CardPrice>{price}</CardPrice>
      </CartProductCardContainer>
    </>
  );
};

export default CardProductCart;