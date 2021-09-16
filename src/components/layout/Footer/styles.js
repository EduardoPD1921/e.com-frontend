import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #efefef;

  background: #ff8b15;
`;

export const IconButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoLinks = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  width: 14%;
  
  @media(max-width: 1440px) {
    width: 20%;
  }

  @media(max-width: 900px) {
    width: 30%;
  }

  @media(max-width: 400px) {
    width: 50%;
  }
`;

export const CopyrightText = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
`;