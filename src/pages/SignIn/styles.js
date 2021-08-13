import styled from 'styled-components';
import { Input } from 'antd';

export const SignInSection = styled.div`
  width: 100%;

  background: #efefef;
`;

export const SignInFormSection = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInForm = styled.div`
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
`;

export const FormInputs = styled.div`
  flex: 1;

  justify-content: center;
  align-items: center;

  display: flex;
`;

export const FormInput = styled(Input)`
  && {
    background: #efefef;
    border-top: none;
    border-left: none;
    border-right: none;

    &:focus {
      box-shadow: none;
    }
  }
`;