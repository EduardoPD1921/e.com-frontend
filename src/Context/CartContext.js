import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

import { notification, message } from 'antd';

import { HiShoppingCart } from 'react-icons/hi';

const CartContext = createContext();

function CartProvider({ children }) {
  const [addedProductsToCart, setAddedProductsToCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
      api.get('/user/getProductCart')
        .then(resp => {
          console.log(resp.data);
          setAddedProductsToCart(resp.data.cart);
          setCartSize(resp.data.cart.length);
        })
        .catch(error => console.log(error.response));
    };
  }, []);

  function addProductToCart(productData) {
    api.put('/user/addProductToCart', productData)
      .then(resp => {
        setAddedProductsToCart(prevState => [...prevState, productData]);
        setCartSize(prevState => prevState + 1);
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
    <CartContext.Provider value={{ addProductToCart, addedProductsToCart, cartSize }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };