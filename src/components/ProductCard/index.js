import React, { useContext } from 'react';
import { LikeContext } from '../../Context/LikeContext';

import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';

import {
  ProductCardSection,
  CardActions,
  CardInfo,
  CardTitle,
  CardPrice,
  CardShow
} from './styles';

function ProductCard({ id, title, image, price, liked }) {
  const { handleLike } = useContext(LikeContext);

  const renderLikedIcon = () => {
    if (liked) {
      return <HeartFilled style={{ fontSize: 15, color: '#e0245e' }} />
    };

    return <HeartOutlined onClick={() => handleLike(id)} style={{ fontSize: 15, color: '#c8c8c8' }} />
  };

  return (
    <ProductCardSection>
      <CardActions>
        {renderLikedIcon()}
        <ShoppingCartOutlined style={{ fontSize: 20, color: '#c8c8c8' }} />
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