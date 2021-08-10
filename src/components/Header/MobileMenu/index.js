import React from 'react';

import { Drawer, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import {
  MobileMenuTitle
} from './styles';

function MobileMenu({ closeMobileMenu, mobileMenuOpen }) {
  return (
    <Drawer
      closeIcon={<CloseOutlined style={{ color: '#efefef' }} />}
      drawerStyle={{ backgroundColor: '#ff8b15', color: 'white' }}
      placement="right"
      closable={true}
      onClose={closeMobileMenu}
      visible={mobileMenuOpen}
    >
      <MobileMenuTitle>
        Menu
      </MobileMenuTitle>
      <Divider style={{ marginTop: 10 }} />
    </Drawer>
  );
};

export default MobileMenu;