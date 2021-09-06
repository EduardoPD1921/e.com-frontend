import React, { useContext } from 'react';
import { LikeContext } from '../../Context/LikeContext';
import { CartContext } from '../../Context/CartContext';

import { Button } from 'antd'; 
import { HiShoppingCart, HiOutlineShoppingCart, HiOutlineHeart, HiHeart } from 'react-icons/hi';

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
  const { addProductToCart, addedProductsToCart } = useContext(CartContext);

  function renderLikedIcon() {
    if (likedProducts.includes(id)) {
      return (
        <Button type="link" onClick={() => handleUnlike(id)}>
          <HiHeart style={{ fontSize: 20, color: '#e0245e' }} />
        </Button>
      );
    };

    return (
      <Button type="link" onClick={() => handleLike(id)}>
        <HiOutlineHeart style={{ fontSize: 20, color: '#c8c8c8' }} />
      </Button>
    );
  };

  function renderCartButton() {
    // const addedProduct = addedProductsToCart.find(e => e._id === id);
    if (addedProductsToCart.find(e => e._id === id)) {
      return (
        <Button type="link">
          <HiShoppingCart style={{ fontSize: 20, color: '#393939' }} />
        </Button>
      );
    };

    return (
      <Button type="link" onClick={() => addProductToCart({ _id: id, title, image, price })}>
        <HiOutlineShoppingCart style={{ fontSize: 20, color: '#c8c8c8' }} />
      </Button>
    );
  };

  return (
    <ProductCardSection>
      <CardActions>
        {renderLikedIcon()}
        {renderCartButton()}
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