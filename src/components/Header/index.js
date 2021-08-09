import React from 'react';

import HeaderItems from '../Header/HeaderItems';

import {
  PageHeader,
  Logo,
  Items,
  ShopCart,
  MenuButton
} from './styles';

import { Button, Badge } from 'antd';
import { ShoppingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const renderMobileMenuIcon = () => {
    if (mobileMenuOpen) {
      return (
        <Button onClick={() => setMobileMenuOpen(false)} type="link">
          <CloseOutlined style={{ fontSize: 20, color: '#ffff' }} />
        </Button>
      );
    };

    return (
      <Button onClick={() => setMobileMenuOpen(true)} type="link">
        <MenuOutlined style={{ fontSize: 20, color: '#ffff' }} />
      </Button>
    );
  };

  return (
    <PageHeader>
      <Logo>
        Logo
      </Logo>
      <MenuButton>
        {renderMobileMenuIcon()}
      </MenuButton>
      <Items>
        <HeaderItems />
      </Items>
      <ShopCart>
        <Button type="link">
          <Badge size="small" count={2}>
            <ShoppingOutlined style={{ fontSize: 20, color: '#efefef' }} />
          </Badge>
        </Button>
      </ShopCart>
    </PageHeader>
  )
};

export default Header;