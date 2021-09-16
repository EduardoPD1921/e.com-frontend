import styled, { css } from "styled-components";

export const ProductInfoSection = styled.div`
  width: 700px;
  height: 300px;

  display: flex;

  border-radius: 12px;

  -webkit-box-shadow: 5px 5px 28px -5px rgba(0,0,0,0.4); 
  box-shadow: 5px 5px 28px -5px rgba(0,0,0,0.4);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  border-radius: 10px 0 0 10px;
`;

export const InfoContainer = styled.div`
  flex: 2;

  border-radius: 0 10px 10px 0;
`;

export const MainInfo = styled.div`
  margin: 25px 25px 0 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductTitle = styled.h2`
  font-family: robotoMedium;
`;

export const ProductPrice = styled.h3`
  margin-left: auto;

  font-family: robotoMedium;
  color: #6b7280;
`;

export const StockText = styled.h4`
  margin-left: 25px;

  color: #6b7280;
`;

export const TagContainer = styled.div`
  margin: 25px;
`;

export const ActionButtonsContainer = styled.div`
  margin: 60px 0 0 25px;

  display: flex;
  justify-content: space-between;
`;

const baseButtonStyle = css`
  width: 170px;
  height: 40px;

  font-size: 15px;
  font-family: robotoMedium;

  border-radius: 5px;

  cursor: pointer;
`;

export const BuyAction = styled.button`
  ${baseButtonStyle};

  border: none;

  color: white;

  background: black;
`;

export const AddToCartAction = styled.button`
  ${baseButtonStyle};

  border-style: solid;
  border-width: 1px;

  background: white;
`;

export const BookmarkProductAction = styled.button`
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 15px;

  border-style: solid;
  border-width: 1px;
  border-radius: 5px;

  background: white;

  cursor: pointer;
`;
