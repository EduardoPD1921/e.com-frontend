import React from 'react';

import { InputNumber, Divider } from 'antd';

import {
  CartProductCardContainer,
  CardInfo,
  CardTitle,
  CardTags,
  CardPrice
} from './styles';

function CartProductCard({ image, title, tags, price }) {
  return (
    <>
      <Divider />
      <CartProductCardContainer>
        <img src={image} width={100} alt="Product" />
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardTags>
            {tags.map(tag => tag + ' ')}
          </CardTags>
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

export default CartProductCard;