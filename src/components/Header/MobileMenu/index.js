import React from 'react';

import HeaderItems from '../HeaderItems';

import { Drawer, Divider, Badge, Button } from 'antd';
import { CloseOutlined, ShoppingOutlined } from '@ant-design/icons';

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
        <HeaderItems isMobileMenu={true} />
        <Button style={{ marginTop: 5 }} type="link">
          <Badge size="small" count={2}>
            <ShoppingOutlined style={{ fontSize: 20, color: '#efefef' }} />
          </Badge>
        </Button>
      </MobileMenuItems>
    </Drawer>
  );
};

export default MobileMenu;