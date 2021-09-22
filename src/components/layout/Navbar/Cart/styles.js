import styled, { css } from 'styled-components';
import { Button } from 'antd';

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

export const CheckoutButton = styled(Button)`
  && {
    margin-top: 50px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: robotoMedium;
    font-size: 16px;
    color: #525252;

    :hover {
      border-color: #ff8b15;
      color: #ff8b15;
    }

    :focus {
      border-color: #ff8b15;
      color: #ff8b15;
    }
  }
`;