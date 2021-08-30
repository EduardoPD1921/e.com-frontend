import React, { useState } from 'react';

import { Drawer, Button, Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

function ShoppingCart() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  function showDrawer() {
    setIsDrawerVisible(true);
  };

  function onClose() {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <Button onClick={showDrawer} type="link">
        <Badge size="small" count={2}>
          <ShoppingOutlined style={{ fontSize: 20, color: '#efefef' }} />
        </Badge>
      </Button>
      <Drawer
        title="Test drawer"
        placement="right"
        closable={true}
        visible={isDrawerVisible}
        onClose={onClose}
      >
        <p>Some contents....</p>
        <p>Some contents....</p>
        <p>Some contents....</p>
        <p>Some contents....</p>
        <p>Some contents....</p>
      </Drawer>
    </>
  );
};

export default ShoppingCart;