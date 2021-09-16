import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';
import { AuthContext } from '../../../../Context/AuthContext';

import CartProductCard from '../../../CartProductCard';

import { Drawer, Badge, Button, Divider } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import { 
  CartTitle,
  ProductsContainer,
  CheckoutContainer,
  SubtotalContainer,
  CheckoutInfo,
  CheckoutButton
} from './styles';

function Cart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { authenticated } = useContext(AuthContext);
  const { addedProductsToCart, cartSize } = useContext(CartContext);

  function showDrawer() {
    if (authenticated) {
      return setIsDrawerVisible(true);
    };

    window.location.replace('/signIn');
  };

  function onClose() {
    setIsDrawerVisible(false);
  };

  function renderCartProducts() {
    return addedProductsToCart.map(product => {
      return (
        <CartProductCard
          image={product.image}
          title={product.title}
          tags={product.tags}
          price={product.price}
        />
      );
    });
  };

  function renderSubtotal() {
    const arrPrices = addedProductsToCart.map(product => {
      return product.price;
    });

    if (arrPrices.length > 0) {
      const subtotal = arrPrices.reduce(function(previousPrice, currentPrice) {
        return previousPrice + currentPrice;
      });

      return subtotal.toFixed(2).replace('.', ',');
    };

    return 0;
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        <Badge size="small" count={cartSize}>
          <HiOutlineShoppingCart style={{ fontSize: 25, color: '#efefef' }} />
        </Badge>
      </Button>
      <Drawer
        width={400}
        placement="right"
        closable={true}
        visible={isDrawerVisible}
        onClose={onClose}
      >
        <CartTitle>Seu carrinho</CartTitle>
        <ProductsContainer>
          {renderCartProducts()}
        </ProductsContainer>
        <CheckoutContainer>
          <Divider />
          <SubtotalContainer>
            <CheckoutInfo>Subtotal</CheckoutInfo>
            <CheckoutInfo style={{ marginLeft: 'auto' }}>R${renderSubtotal()}</CheckoutInfo>
          </SubtotalContainer>
          <CheckoutButton>
            Finalizar compra
          </CheckoutButton>
        </CheckoutContainer>
      </Drawer>
    </>
  );
};

export default Cart;