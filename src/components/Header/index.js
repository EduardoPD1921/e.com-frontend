import React, { useState } from 'react';

import HeaderItems from '../Header/HeaderItems';
import MobileMenu from './MobileMenu';

import {
  PageHeader,
  Logo,
  Items,
  ShopCart,
  MenuButton
} from './styles';

import { Button, Badge } from 'antd';
import { ShoppingOutlined, MenuOutlined } from '@ant-design/icons';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <PageHeader>
        <Logo>
          Logo
        </Logo>
        <MenuButton>
          <MenuOutlined onClick={showMobileMenu} style={{ fontSize: 20, color: '#ffff', margin: 10 }} />
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
      {/* responsive menu */}
      <MobileMenu mobileMenuOpen={mobileMenuOpen} closeMobileMenu={closeMobileMenu} />
    </>
  )
};

export default Header;