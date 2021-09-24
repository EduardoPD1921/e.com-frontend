import styled, { css } from "styled-components";

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
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const PaymentInfo = styled.div`
  margin-left: 40px;

  display: flex;
  flex-direction: column;
  flex: 2;

  border-radius: 15px;

  background: #FAFAFA;
`;

export const ProductsInfoTitle = styled.h1`
  font-family: robotoBold;
`;

export const TitleRow = styled.tr`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #f6f6f6;
`;

export const CheckoutPriceInfo = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: row;

  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #f6f6f6;
`;

export const ContinueShoppingContainer = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: flex-end;
  flex: 4;
`;

export const SubtotalInfo = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const PriceInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #f6f6f6;
`;

export const PriceInfoRow = styled.div`
  margin-top: ${props => props.marginTop}px;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceKey = styled.h3`
  color: #ACACAE;
`;

export const PriceValue = styled.h2`
  color: #4B4C53;
  font-family: robotoMedium;
`;

const TotalStyle = css`
  font-family: robotoBold;
  color: #1B202A;  
`;

export const TotalKey = styled.h3`
  ${TotalStyle}
`;

export const TotalPrice = styled.h2`
  ${TotalStyle}
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: robotoBold;
  font-size: 20px;

  a {
    color: black;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const PaymentInfoTitle = styled.h1`
  margin: 20px 0 0 30px;

  font-family: robotoBold;
`;

export const PaymentMethodContainer = styled.div`
  margin: 50px 30px 0 30px;

  display: flex;
  flex-direction: column;
`;

export const PaymentMethodTitle = styled.span`
  font-size: 13px;
  color: #8F9190;
`;

export const PaymentMethodRow = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const PaymentMethodText = styled.span`
  margin-left: 32px;

  font-family: robotoMedium;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckoutButton = styled.button`
  height: 60px;

  margin-top: 70px;

  background: #1890FF;

  color: white;
  font-family: robotoBold;
  font-size: 18px;

  border: none;
  border-radius: 8px;

  cursor: pointer;
`;