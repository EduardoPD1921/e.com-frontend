import styled, { css } from 'styled-components';

const titleStyle = css`
  font-family: robotoBold;
  color: #525252;
`;

export const CartTitle = styled.h2`
  ${titleStyle}
`;

export const CheckoutInfo = styled.h3`
  ${titleStyle}
`;

export const ProductsContainer = styled.div`
  height: 650px;

  overflow: auto;
`;

export const CheckoutContainer = styled.div`
  height: 200px;

  display: flex;
  flex-direction: column;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;