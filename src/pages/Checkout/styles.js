import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 903px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 70%;
  height: 600px;

  display: flex;
  flex-direction: row;
`;

export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex: 2;
`;

export const ProductsInfoTitle = styled.h1`
  font-family: robotoBold;
`;

export const TitleRow = styled.tr`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #f6f6f6;
`;

export const TableProductDisplay = styled.td`
  width: 90px;

  display: flex;
  flex-direction: row;
`;

export const TableProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const ProductTitle = styled.h3`
  font-family: robotoMedium;
`;