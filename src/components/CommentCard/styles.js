import styled from "styled-components";

export const CommentCardSection = styled.div`
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