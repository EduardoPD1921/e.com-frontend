import React, { useContext } from 'react';
import { LikeContext } from '../../Context/LikeContext';
import { CartContext } from '../../Context/CartContext';

import { Tag } from 'antd';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

import {
  ProductInfoSection,
  ImageContainer,
  InfoContainer,
  MainInfo,
  ProductTitle,
  ProductPrice,
  StockText,
  TagContainer,
  ActionButtonsContainer,
  BuyAction,
  AddToCartAction,
  BookmarkProductAction
} from './styles';

function ProductInfo({ id, title, image, price, tags }) {
  const { likedProducts, handleLike, handleUnlike } = useContext(LikeContext);
  const { addProductToCart } = useContext(CartContext);

  function renderLikedButton() {
    if (likedProducts.includes(id)) {
      return (
        <BookmarkProductAction onClick={() => handleUnlike(id)}>
          <HiHeart style={{ fontSize: 20, color: '#e0245e' }} />
        </BookmarkProductAction>
      );
    };

    return (
      <BookmarkProductAction onClick={() => handleLike(id)}>
        <HiOutlineHeart style={{ fontSize: 20, color: '#c8c8c8' }} />
      </BookmarkProductAction>
    );
  };

  function renderTags() {
    return tags.map(tag => {
      return <Tag>{tag}</Tag>
    });
  };

  return (
    <ProductInfoSection>
      <ImageContainer>
        <img src={image} height={150} alt="product" />
      </ImageContainer>
      <InfoContainer>
        <MainInfo>
          <ProductTitle>
            {title}
          </ProductTitle>
          <ProductPrice>
            R${price.toFixed(2).replace('.', ',')}
          </ProductPrice>
        </MainInfo>
        <StockText>
          Em estoque
        </StockText>
        <TagContainer>
          {renderTags()}
        </TagContainer>
        <ActionButtonsContainer>
          <BuyAction onClick={() => console.log('test')}>Comprar</BuyAction>
          <AddToCartAction onClick={() => addProductToCart({ _id: id, title, image, price, tags })}>
            Adicionar ao carrinho
          </AddToCartAction>
          {renderLikedButton()}
        </ActionButtonsContainer>
      </InfoContainer>
    </ProductInfoSection>
  );
};

export default ProductInfo;