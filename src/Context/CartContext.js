import React, { createContext, useState } from 'react';
import api from '../api';

const CartContext = createContext();

function CartProvider({ children }) {
  const [addedProductsToCart, setAddedProductsToCart] = useState([]);

  function addProductToCart(productData) {
    api.put('/user/addProductToCart', productData)
      .then(resp => console.log(resp.data))
      .catch(error => console.log(error.response));
  };

  return (
    <CartContext.Provider value={{ addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };