import styled from 'styled-components';

export const CloseButton = styled.div`
  visibility: hidden;

  align-self: flex-end;

  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  :hover {
    ${CloseButton} {
      visibility: visible;
    }
  }
`;

export const CartProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const CardInfo = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-family: robotoMedium;
`;

export const CardTags = styled.i`
  color: #8b8b8b;
  font-size: 12px;
`;

export const CardPrice = styled.div`
  font-family: robotoMedium;

  align-self: flex-end;
`;