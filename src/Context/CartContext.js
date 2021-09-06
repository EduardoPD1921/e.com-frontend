import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

import { notification, message } from 'antd';

import { HiShoppingCart } from 'react-icons/hi';

const CartContext = createContext();

function CartProvider({ children }) {
  const [addedProductsToCart, setAddedProductsToCart] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
      api.get('/user/getProductCart')
        .then(resp => setAddedProductsToCart(resp.data.cart))
        .catch(error => console.log(error.response));
    };
  }, []);

  function addProductToCart(productData) {
    api.put('/user/addProductToCart', productData)
      .then(resp => {
        setAddedProductsToCart(prevState => [...prevState, productData.id]);
        notification.open({
          message: 'Produto adicionado ao carrinho',
          icon: <HiShoppingCart />,
          placement: 'bottomLeft'
        });
      })
      .catch(error => errorHandler(error.response.data));
  };

  function errorHandler(error) {
    if (error === 'access-denied') {
      return window.location.replace('/signIn');
    };

    message.error('Erro interno');
  };

  return (
    <CartContext.Provider value={{ addProductToCart, addedProductsToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };