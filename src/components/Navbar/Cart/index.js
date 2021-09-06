import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../Context/CartContext';

import { Drawer, Badge, Button } from 'antd';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Cart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [cartSize, setCartSize] = useState(0);

  const { addedProductsToCart } = useContext(CartContext);

  useEffect(() => {
    setCartSize(addedProductsToCart.lenght);
  }, [addedProductsToCart]);

  function showDrawer() {
    setIsDrawerVisible(true);
  };

  function onClose() {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <Badge size="small" count={cartSize}>
        <Button type="link" onClick={showDrawer}>
          <HiOutlineShoppingCart style={{ fontSize: 25, color: '#efefef' }} />
        </Button>
      </Badge>
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