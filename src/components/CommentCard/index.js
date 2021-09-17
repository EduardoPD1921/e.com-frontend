import React from 'react';

import { Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
  CommentCardSection,
  CommentAuthor,
  CommentDate,
  Comment
} from './styles';

function CommentCard({ authorName, postDate, stars, comment }) {
  function getDateString(fullDate) {
    const date = new Date(fullDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <CommentCardSection>
      <CommentAuthor><Avatar style={{ marginRight: 10 }} icon={<UserOutlined />} />{authorName}</CommentAuthor>
      <CommentDate>{getDateString(postDate)}</CommentDate>
      <Rate allowHalf disabled defaultValue={stars} />
      <Comment>{comment}</Comment>
    </CommentCardSection>
  );
};

export default CommentCard;