import React, { useState } from 'react';

import NavbarItems from './NavbarItems';
import MobileMenu from './MobileMenu';
import UserOptions from './UserOptions';

import {
  PageHeader,
  Logo,
  Items,
  ShopCart,
  MenuButton
} from './styles';

import { MenuOutlined } from '@ant-design/icons';

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
        <Logo href="/home">
          Logo
        </Logo>
        <MenuButton>
          <MenuOutlined onClick={showMobileMenu} style={{ fontSize: 20, color: '#ffff', margin: 10 }} />
        </MenuButton>
        <Items>
          <NavbarItems />
        </Items>
        <ShopCart>
          <UserOptions />
        </ShopCart>
      </PageHeader>
      {/* responsive menu */}
      <MobileMenu mobileMenuOpen={mobileMenuOpen} closeMobileMenu={closeMobileMenu} />
    </>
  )
};

export default Header;