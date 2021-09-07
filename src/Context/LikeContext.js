import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

import { message } from 'antd';

const LikeContext = createContext();

function LikeProvider({ children }) {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
      api.get('/user/getLikedProducts')
        .then(resp => setLikedProducts(resp.data.likedProducts))
        .catch(error => console.log(error.response));
    };
  }, []);

  function handleLike(productId) {
    const data = { productId };

    api.put('/user/likeProduct', data)
      .then(resp => setLikedProducts(prevState => [...prevState, productId]))
      .catch(error => errorHandler(error.response.data));
  };

  function handleUnlike(productId) {
    api.put('/user/unlikeProduct', { productId })
      .then(resp => setLikedProducts(prevState => prevState.filter(e => e !== productId)))
      .catch(error => errorHandler(error.response.data));
  }

  function errorHandler(error) {
    if (error === 'access-denied') {
      return window.location.replace('/signIn');
    };

    message.error('Erro interno');
  };

  return (
    <LikeContext.Provider value={{ handleLike, handleUnlike, likedProducts }}>
      {children}
    </LikeContext.Provider>
  );
};

export { LikeContext, LikeProvider };