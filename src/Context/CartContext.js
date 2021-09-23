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
      .catch(error => errorHandler(error.response));
  };

  function removeProductFromCart(_id) {
    api.put('/user/removeProductFromCart', { _id })
      .then(resp => {
        setAddedProductsToCart(prevState => prevState.filter(e => e._id !== _id));
        setCartSize(prevState => prevState - 1);
      })
      .catch(error => errorHandler(error.response));
  };

  function updateProductQuantity(productId, productQuantity) {
    return new Promise((resolve, reject) => {
      api.put('/user/updateProductQuantity', { productId, productQuantity })
        .then(resp => resolve(resp))
        .catch(error => reject(error.response));
    });
  };

  function errorHandler(error) {
    if (error.data === 'access-denied') {
      return window.location.replace('/signIn');
    };

    message.error('Erro interno');
    console.log(error);
  };

  return (
    <CartContext.Provider value={
      { 
        addProductToCart, 
        removeProductFromCart,
        updateProductQuantity,
        addedProductsToCart, 
        cartSize 
      }
    }>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };