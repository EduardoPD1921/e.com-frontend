import styled from 'styled-components';

export const Test = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInfoSection = styled.div`
  width: 600px;
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

