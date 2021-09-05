import React, { useContext } from 'react';
import { LikeContext } from '../../Context/LikeContext';
import { CartContext } from '../../Context/CartContext';

import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';

import {
  ProductCardSection,
  CardActions,
  CardInfo,
  CardTitle,
  CardPrice,
  CardShow
} from './styles';

function ProductCard({ id, title, image, price }) {
  const { handleLike, handleUnlike, likedProducts } = useContext(LikeContext);
  const { addProductToCart } = useContext(CartContext);

  function renderLikedIcon() {
    if (likedProducts.includes(id)) {
      return <HeartFilled onClick={() => handleUnlike(id)} style={{ fontSize: 15, color: '#e0245e' }} />
    };

    return <HeartOutlined onClick={() => handleLike(id)} style={{ fontSize: 15, color: '#c8c8c8' }} />
  };

  return (
    <ProductCardSection>
      <CardActions>
        {renderLikedIcon()}
        <ShoppingCartOutlined onClick={() => addProductToCart({ id, title, image, price })} style={{ fontSize: 20, color: '#c8c8c8' }} />
      </CardActions>
      <CardInfo>
        <img src={image} width={150} alt="Product" />
        <CardTitle>
          {title}
        </CardTitle>
        <CardPrice>
          {price}
        </CardPrice>
      </CardInfo>
      <CardShow>
        Ver mais
      </CardShow>
    </ProductCardSection>
  );
};

export default ProductCard;