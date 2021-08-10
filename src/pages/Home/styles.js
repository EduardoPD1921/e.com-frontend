import styled from 'styled-components';
import { Button } from 'antd';

export const Banner = styled.div`
  width: 100vw;
  height: 500px;

  display: flex;

  background: #ff8b15;
`;

export const BannerText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #efefef;
`;

export const BannerArt = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #efefef;

  @media(max-width: 600px) {
    display: none;
  }
`;

export const BannerTitle = styled.div`
  width: 30vw;

  font-size: 2vw;
  font-family: robotoMedium;

  @media(max-width: 1000px) {
    font-size: 2.5vw;
  }

  @media(max-width: 830px) {
    font-size: 20px;
  }

  @media(max-width: 600px) {
    width: 60vw;
  }
`;

export const BannerSubtitle = styled.div`
  margin: 30px 0 40px 0;

  width: 30vw;

  @media(max-width: 600px) {
    width: 60vw;
  }
`;

export const BannerButtons = styled.div`
  width: 30vw;

  display: flex;
  justify-content: center;

  @media(max-width: 600px) {
    width: 60vw;
  }
`;

export const ActionButton = styled(Button)`
  margin: 0 10px 0 10px;
  width: 12vw;

  color: ${props => props.product ? '#ff8b15' : '#efefef'};
  background: ${props => props.product ? '#efefef' : '#ff8b15'};

  border-color: #efefef;

  font-family: robotoMedium;

  &&:hover {
    color: ${props => props.product ? '#efefef' : '#ff8b15'};
    background: ${props => props.product ? '#ff8b15' : '#efefef'};

    border-color: #efefef;
  }

  &&:focus {
    color: ${props => props.product ? '#efefef' : '#ff8b15'};
    background: ${props => props.product ? '#ff8b15' : '#efefef'};

    border-color: #efefef;
  }

  @media(max-width: 800px) {
    width: 100px;
  }
`;

export const BannerImage = styled.img`
  width: 500px;

  @media(max-width: 830px) {
    width: 300px;
  }
`;