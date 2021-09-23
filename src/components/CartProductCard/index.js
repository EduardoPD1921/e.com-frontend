import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { InputNumber, Divider } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

import {
  MainContainer,
  CartProductCardContainer,
  CardInfo,
  CardTitle,
  CardTags,
  CardPrice,
  CloseButton
} from './styles';

function CartProductCard({ id, image, title, tags, price }) {
  const { removeProductFromCart } = useContext(CartContext);

  return (
    <>
      <Divider />
      <MainContainer>
        <CloseButton>
          <RiCloseFill onClick={() => removeProductFromCart(id)} style={{ fontSize: 18 }} />
        </CloseButton>
        <CartProductCardContainer>
          <img src={image} width={100} alt="Product" />
          <CardInfo>
            <CardTitle>{title}</CardTitle>
            <CardTags>
              {tags.map(tag => tag + ' ')}
            </CardTags>
            <InputNumber
              min={1}
              defaultValue={1}
              style={{ width: 70, marginTop: 15 }} 
            />
          </CardInfo>
          <CardPrice>R${price.toFixed(2).replace('.', ',')}</CardPrice>
        </CartProductCardContainer>
      </MainContainer>
    </>
  );
};

export default CartProductCard;