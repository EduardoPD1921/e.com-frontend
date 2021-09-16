import styled, { css } from 'styled-components';
import { Input, DatePicker, Button } from 'antd';

export const FormSection = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 1300px) {
    height: 1500px;
  }

  @media(max-width: 700px) {
    height: 1000px;
  }
`;

export const FormShape = styled.div`
  width: 60%;
  height: 700px;

  display: flex;
  
  border-radius: 10px;

  -webkit-box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2); 
  box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2);

  background: white;

  @media(max-width: 1300px) {
    flex-direction: column;
    height: 1200px;
  }

  @media(max-width: 700px) {
    height: 600px;
    width: 100%;
  }
`;

export const FormMarketingInfo = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  border-radius: 8px 0 0 8px;

  background: rgb(255,139,21);
  background: -moz-linear-gradient(130deg, rgba(255,139,21,1) 49%, rgba(255,177,0,1) 100%);
  background: -webkit-linear-gradient(130deg, rgba(255,139,21,1) 49%, rgba(255,177,0,1) 100%);
  background: linear-gradient(130deg, rgba(255,139,21,1) 49%, rgba(255,177,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8b15",endColorstr="#ffb100",GradientType=1); 

  @media(max-width: 1300px) {
    border-radius: 8px 8px 0 0;
  }

  @media(max-width: 700px) {
    display: none;
  }
`;

export const MarketingSection = styled.div`
  width: 70%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TextCard = styled.div`
  display: flex;

  @media(max-width: 1300px) {
    margin: 50px;
  }

  @media(max-width: 700px) {
    margin: 0;
  }
`;

export const IconShape = styled.div`
  height: 80px;

  background-color: rgba(255, 255, 255, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
`;

export const CardText = styled.div`
  margin-left: 20px;
`;

export const CardTitle = styled.div`
  font-family: robotoBold;
`;

export const CardInfo = styled.div`
  display: flex;

  font-size: 12px;
  opacity: 0.8;
`;

export const CardIcon = styled.div`
  margin: 15px;

  font-size: 40px;
  color: white;
`;

export const FormTitle = styled.div`
  margin: 20px;

  color: #5f5f5f;
  font-size: 16px;
  font-family: robotoBold;
`;

export const FormInputs = styled.div`
  flex: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 1300px) {
    margin-top: 20px;
  }
`;

const baseInputStyle = css`
  && {
    width: 100%;
    
    border-radius: 7px;
  }
`;

export const FormInput = styled(Input)`
  ${baseInputStyle}
`;

export const DateInput = styled(DatePicker)`
  ${baseInputStyle}
`;

export const PasswordInput = styled(Input.Password)`
  ${baseInputStyle}
`;

export const FormLabel = styled.label`
  color: #5f5f5f;
  font-family: robotoMedium;
`;

export const SubmitButton = styled(Button)`
  && {
    margin-top: 10px;

    width: 100%;

    background: #ff8b15;

    border-radius: 7px;
    border: none;

    color: white;

    &:hover {
      background: #ffa03f;
    }
  }
`;