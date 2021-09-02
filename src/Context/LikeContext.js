import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const LikeContext = createContext();

function LikeProvider({ children }) {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    api.get('/user/getLikedProducts')
      .then(resp => setLikedProducts(resp.data.likedProducts))
      .catch(error => console.log(error.response));
  }, []);

  function handleLike(productId) {
    const data = { productId };
    api.put('/user/likeProduct', data)
      .then(resp => {
        setLikedProducts(prevState => [...prevState, productId]);
      })
      .catch(error => console.log(error.response));
  };

  function handleUnlike(productId) {
    const data = { productId };
    api.put('/user/unlikeProduct', data)
      .then(resp => {
        setLikedProducts(prevState => prevState.filter(e => e !== productId));
      })
      .catch(error => console.log(error.response));
  }

  return (
    <LikeContext.Provider value={{ handleLike, handleUnlike, likedProducts }}>
      {children}
    </LikeContext.Provider>
  );
};

export { LikeContext, LikeProvider };