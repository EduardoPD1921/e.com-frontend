import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { InputNumber, Divider, message } from 'antd';
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
  const { removeProductFromCart, updateProductQuantity } = useContext(CartContext);

  function quantityChangeHandler(productQuantity) {
    if (productQuantity >= 1) {
      updateProductQuantity(id, productQuantity)
        .then(resp => console.log(resp))
        .catch(error => errorHandler(error));
    };
  };

  function errorHandler(error) {
    if (error.data === 'access-denied') {
      return window.location.replace('/signIn');
    };

    message.error('Erro interno');
    console.log(error);
  };

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
              onChange={value => quantityChangeHandler(value)}
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