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

export const CommentCard = styled.div`
  width: 30%;
  height: 120px;

  margin: 30px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CommentAuthor = styled.span`
  font-family: robotoMedium;
  font-size: 16px;
  color: #585858;

  margin-left: 3px;
`;

export const CommentDate = styled.span`
  color: #6C7381;
  font-size: 12px;

  margin: 10px 0 10px 3px;
`;

export const Comment = styled.p`
  margin-top: 10px;
`;

