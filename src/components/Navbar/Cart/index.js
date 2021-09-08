import React, { useState, useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { AuthContext } from '../../../Context/AuthContext';

import { Drawer, Badge, Button } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

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
        placement="right"
        closable={true}
        visible={isDrawerVisible}
        onClose={onClose}
      >
        test
      </Drawer>
    </>
  );
};

export default Cart;