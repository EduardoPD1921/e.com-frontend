import React, { useState } from 'react';

import { Drawer, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Cart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  function showDrawer() {
    setIsDrawerVisible(true);
  };

  function onClose() {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <Badge size="small">
        <ShoppingCartOutlined onClick={showDrawer} style={{ fontSize: 20, color: '#efefef' }} />
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