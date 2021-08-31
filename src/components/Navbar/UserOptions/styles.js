import styled, { css } from 'styled-components';
import { HomeFilled } from '@ant-design/icons';

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h4`
  margin: 0;

  color: #353535;
  font-family: robotoMedium;
`;

export const UserEmail = styled.span`
  font-size: 12px;
  color: #a4a4a4;
`;

export const DrawerOptions = styled.div`
  margin-top: 30px;
`;

const baseIconStyle = css`
  margin-right: 30px;

  font-size: 20px;
  color: #757575;
`;

export const DrawerButton = styled.a`
  padding: 5px;

  display: flex;

  color: #636363;

  border-radius: 8px;

  transition: 0.1s;

  :hover {
    color: #636363;
    background-color: #ffddba;
  }
`;

export const HomeIcon = styled(HomeFilled)`
  && {
    ${baseIconStyle}

    :hover {
      color: blue;
    }
  }
`;