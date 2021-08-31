import React, { useState } from 'react';

import { Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
  DrawerContainer,
  UserName,
  UserEmail,
  DrawerOptions,
  DrawerButton,
  HomeIcon
} from './styles';

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
        placement="right"
        closable={true}
        visible={isDrawerVisible}
        onClose={onClose}
      >
        <DrawerContainer>
          <UserName>
            Eduardo Gomes Heleno
          </UserName>
          <UserEmail>
            eduardo.gheleno@gmail.com
          </UserEmail>
          <DrawerOptions>
            <DrawerButton>
              <HomeIcon />
              Página inicial
            </DrawerButton>
          </DrawerOptions>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default UserOptions;