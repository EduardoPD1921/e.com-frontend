import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import api from '../../api';

import { Form, Rate, Input } from 'antd';

import { SendCommentButton } from './styles';

function CommentForm({ productId }) {
  const { authenticated } = useContext(AuthContext);

  const { TextArea } = Input;

  function submitComment({ stars, comment }) {
    if (authenticated === false) {
      return window.location.replace('/signIn');
    };

    api.put('/product/addComment', { stars, comment, productId })
      .then(resp => {
        console.log(resp);
        window.location.reload();
      })
      .catch(error => console.log(error.response));
  };

  return (
    <Form
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      requiredMark={false}
      name="commentForm"
      layout="vertical"
      onFinish={submitComment}
    >
      <Form.Item
        style={{ margin: 10 }}
        name="stars"
      >
        <Rate allowHalf />
      </Form.Item>
      <Form.Item
        style={{ margin: 5 }}
        name="comment"
      >
        <TextArea maxLength={200} style={{ width: 400 }} placeholder="Deixe sua avaliação" />
      </Form.Item>
      <Form.Item
        style={{ alignSelf: 'flex-end', margin: 5 }}
      >
      <SendCommentButton type="primary" htmlType="submit">Enviar</SendCommentButton>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;