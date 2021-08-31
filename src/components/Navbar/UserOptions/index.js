import React, { useState } from 'react';

import { Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function UserOptions() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  function showDrawer() {
    setIsDrawerVisible(true);
  };

  function onClose() {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <UserOutlined onClick={showDrawer} style={{ fontSize: 20, color: '#efefef' }} />
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

export default UserOptions;