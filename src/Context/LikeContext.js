import React, { createContext, useState } from 'react';
import api from '../api';

const LikeContext = createContext();

function LikeProvider({ children }) {
  const [likedProducts, setLikedProducts] = useState();

  function handleLike(productId) {
    const data = { productId };

    api.put('/user/likeProduct', data);
  };

  return (
    <LikeContext.Provider value={{ handleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export { LikeContext, LikeProvider };