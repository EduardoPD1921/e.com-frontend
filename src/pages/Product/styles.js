import styled from 'styled-components';
import { Button } from 'antd';

export const ProductInfoSection = styled.div`
  width: 100%;
  height: 900px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentsSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SendCommentButton = styled(Button)`
  && {
    margin-top: 10px;

    align-self: flex-end;

    font-family: robotoMedium;
  }
`;

