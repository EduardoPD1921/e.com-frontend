import React from 'react';
import { ItemLink } from './styles';

function HeaderItems({ isMobileMenu }) {
  return (
    <>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Masculino</ItemLink>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Feminino</ItemLink>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Esporte</ItemLink>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Infantil</ItemLink>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Eletrônicos</ItemLink>
      <ItemLink href="/" mobileMenu={isMobileMenu}>Marcas</ItemLink>
    </>
  );
};

export default HeaderItems;