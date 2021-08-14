import styled from 'styled-components';
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
  flex-direction: row;

  border-radius: 10px;

  -webkit-box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2); 
  box-shadow: 4px 1px 15px -2px rgba(0,0,0,0.2);
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

export const FormInput = styled(Input)`
  && {
    width: 120%;

    background: #efefef !important;
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

export const FormInputPassword = styled(Input.Password)`
  && {
    width: 120%;

    background-color: #efefef !important;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 2px;
    box-shadow: none !important;

    &:hover {
      border-color: #ff8b15;
    }
  }
`;

export const SubmitButton = styled(Button)`
  && {
    width: 120%;

    color: white;

    background-color: #ff8b15;

    border: none;
  }
`;