import styled from 'styled-components';

export const PageHeader = styled.header`
  width: 100vw;
  height: 60px;

  display: flex;
  flex-direction: row;

  color: #efefef;
  font-size: 17px;

  background: #ff8b15;
`;

export const Logo = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: robotoBold;
  font-size: 20px;

  @media(max-width: 780px) {
    margin-left: 10px;
    justify-content: unset;
  }
`;

export const Items = styled.div`
  flex: 10;

  display: flex;
  align-items: center;

  @media(max-width: 780px) {
    display: none;
  }
`;

export const ShopCart = styled.div`
  margin-right: 20px;

  align-self: center;

  @media(max-width: 780px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  margin-right: 10px;

  display: none;
  flex: 1;

  justify-content: flex-end;
  align-items: center;

  @media(max-width: 780px) {
    display: flex;
  }
`;

export const ItemLink = styled.a`
  margin: ${props => props.mobileMenu ? '10px' : '20px'};
  transition: 0.2s;

  color: #efefef;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;