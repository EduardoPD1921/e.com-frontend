import React from 'react';

import NavbarItems from '../NavbarItems';
import UserOptions from '../UserOptions';

import { Drawer, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import {
  MobileMenuTitle,
  MobileMenuItems,
} from './styles';

function MobileMenu({ closeMobileMenu, mobileMenuOpen }) {
  return (
    <Drawer
      closeIcon={<CloseOutlined style={{ color: '#efefef' }} />}
      drawerStyle={{
        backgroundColor: '#ff8b15',
        color: 'white',
        display: 'flex'
      }}
      placement="right"
      closable={true}
      onClose={closeMobileMenu}
      visible={mobileMenuOpen}
    >
      <MobileMenuTitle>
        Menu
      </MobileMenuTitle>
      <Divider style={{ marginTop: 10, backgroundColor: '#efefef' }} />
      <MobileMenuItems>
        <NavbarItems isMobileMenu={true} />
        <UserOptions />
      </MobileMenuItems>
    </Drawer>
  );
};

export default MobileMenu;