import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

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
    const data = { productId };

    api.put('/user/unlikeProduct', data)
      .then(resp => setLikedProducts(prevState => prevState.filter(e => e !== productId)))
      .catch(error => errorHandler(error.response.data));
  }

  function errorHandler(error) {
    if (error === 'access-denied') {
      window.location.replace('/signIn');
    };

    console.log(error);
  };

  return (
    <LikeContext.Provider value={{ handleLike, handleUnlike, likedProducts }}>
      {children}
    </LikeContext.Provider>
  );
};

export { LikeContext, LikeProvider };