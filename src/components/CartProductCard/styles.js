import styled from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;

  right: 30px;

  visibility: hidden;

  cursor: pointer;
`;

export const CartProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  :hover {
    ${CloseButton} {
      visibility: visible;
    }
  }
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