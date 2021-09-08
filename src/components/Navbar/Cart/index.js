import React, { useState, useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { AuthContext } from '../../../Context/AuthContext';

import { Drawer, Badge, Button, Divider, InputNumber } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import itemImage from '../../../static/images/itemImage.png';

import {
  CartTile,
  CartProductCard,
  CardInfo,
  CardTitle,
  CardTags,
  CardPrice
} from './styles';

function Cart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { authenticated } = useContext(AuthContext);
  const { cartSize } = useContext(CartContext);

  function showDrawer() {
    if (authenticated) {
      return setIsDrawerVisible(true);
    };

    window.location.replace('/signIn');
  };

  function onClose() {
    setIsDrawerVisible(false);
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

        <Divider />
        <CartProductCard>
          <img src={itemImage} width={100} alt="Product" />
          <CardInfo>
            <CardTitle>Relógio rolex</CardTitle>
            <CardTags>Relógio acessório vestuário</CardTags>
            <InputNumber
              defaultValue={1}
              style={{ width: 70, marginTop: 15 }}
            />
          </CardInfo>
          <CardPrice>
            R$45,00
          </CardPrice>
        </CartProductCard>
      </Drawer>
    </>
  );
};

export default Cart;