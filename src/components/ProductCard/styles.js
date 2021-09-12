import styled from 'styled-components';
import { Button } from 'antd';

export const CardShow = styled(Button)`
  // Temporarily comented just for tests on mobile screen
  /* visibility: hidden; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;

  font-family: robotoBold;
  font-size: 15px;
  color: white;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;

  background: rgb(255,132,3);
  background: -moz-linear-gradient(145deg, rgba(255,132,3,1) 24%, rgba(253,193,57,1) 100%);
  background: -webkit-linear-gradient(145deg, rgba(255,132,3,1) 24%, rgba(253,193,57,1) 100%);
  background: linear-gradient(145deg, rgba(255,132,3,1) 24%, rgba(253,193,57,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8403",endColorstr="#fdc139",GradientType=1);
  
  &:hover {
    background: white;
    border: none;

    color: #ff8b15;
  }

  &:focus {
    color: #ff8b15;
  }
`;

export const ProductCardSection = styled.div`
  /* width: 15vw; */
  width: 280px;
  height: 400px;
  margin: 40px;

  display: flex;
  flex-direction: column;

  border-radius: 8px;

  -webkit-box-shadow: 4px 1px 15px -7px rgba(0,0,0,0.2); 
  box-shadow: 4px 1px 15px -7px rgba(0,0,0,0.2);

  &:hover {
    ${CardShow} {
      visibility: visible;
    }
  }
`;

export const CardActions = styled.div`
  margin: 15px;

  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20;
`;

export const CardTitle = styled.div`
  margin: 15px;

  font-family: robotoMedium;
  font-size: 20px;
  color: #626262;
`;

export const CardPrice = styled.div`
  font-family: robotoBold;
  font-size: 15px;
  color: #30a0f3;
`;