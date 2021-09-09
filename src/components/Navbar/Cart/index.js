import React, { useState, useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { AuthContext } from '../../../Context/AuthContext';

import CartProductCard from '../../CartProductCard';

import { Drawer, Badge, Button } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

// import itemImage from '../../../static/images/itemImage.png';

import { CartTile } from './styles';

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

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        <Badge size="small" count={cartSize}>
          <HiOutlineShoppingCart style={{ fontSize: 25, color: '#efefef' }} />
        </Badge>
      </Button>
      <Drawer
        width={380}
        placement="right"
        closable={true}
        visible={isDrawerVisible}
        onClose={onClose}
      >
        <CartTile>Seu carrinho</CartTile>
        {renderCartProducts()}
      </Drawer>
    </>
  );
};

export default Cart;