import styled, { css } from 'styled-components';
import { Input, Button } from 'antd';

export const SignInFormSection = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInFormArea = styled.div`
  width: 50%;
  height: 500px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background: white;

  -webkit-box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2); 
  box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2);
`;

export const SignInSection = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
`;

export const FormTitle = styled.div`
  margin: 10px;

  display: flex;
  justify-content: center;

  color: #5f5f5f;
  font-size: 18px;
  font-family: robotoBold;
`;

export const FormIllustration = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInputs = styled.div`
  flex: 1;

  justify-content: center;
  align-items: center;

  display: flex;
`;

const baseInputStyle = css`
  && {
    width: 120%;

    /* background: #efefef !important; */
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 2px;

    &:focus {
      border-color: #ff8b15;
      box-shadow: none !important;
    }

    &:hover {
      border-color: #ff8b15;
    }
  }
`;

export const FormInput = styled(Input)`
  ${baseInputStyle}
`;

export const FormInputPassword = styled(Input.Password)`
  ${baseInputStyle}
`;

export const FormLabel = styled.label`
  color: #5f5f5f;
  font-family: robotoMedium;
`;

export const SubmitButton = styled(Button)`
  && {
    width: 120%;

    color: white;

    background-color: #ff8b15;

    border: none;

    &:hover {
      background-color: #ffa03f;
    }
  }
`;

export const FormExtraInfo = styled.div`
  width: 120%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormLink = styled.a`
  color: #ff8b15;

  &:hover {
    color: #ffa03f;
  }
`;