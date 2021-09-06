import React, { useState, useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

import { Drawer, Badge, Button } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Cart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  
   const { cartSize } = useContext(CartContext);

  function showDrawer() {
    setIsDrawerVisible(true);
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