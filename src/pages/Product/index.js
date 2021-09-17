import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';

import api from '../../api';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProductInfo from '../../components/ProductInfo';

import { Divider, Input, Rate, Form } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {
  ProductInfoSection,
  CommentsSection,
  UserComment,
  SendCommentButton
} from './styles';

function Product() {
  const [product, setProduct] = useState();

  const { authenticated } = useContext(AuthContext);

  const { id } = useParams();

  const { TextArea } = Input;

  useEffect(() => {
    api.get(`/product/getById/${id}`)
      .then(resp => setProduct(resp.data))
      .catch(error => console.log(error.response));
  });

  function renderProductInfo() {
    if (product) {
      return (
        <ProductInfo
          id={product._id} 
          title={product.title}
          image={product.image}
          price={product.price}
          tags={product.tags}
        />
      );
    };

    return <LoadingOutlined style={{ color: '#ff8b15' }} />
  };

  function submitComment({ stars, comment }) {
    // if (authenticated) {
    //   api.put('/product/addComment', { stars, comment })
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error.response));
    // };
  };

  return (
    <>
      <Navbar />

      <ProductInfoSection>
        {renderProductInfo()}
      </ProductInfoSection>

      <CommentsSection>
        <Divider>Comentários</Divider>

        <UserComment>
          <Form
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            requiredMark={false}
            name="commentForm"
            layout="veritcal"
            onFinish={test}
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
            <Form.Item style={{ alignSelf: 'flex-end', margin: 5 }}>
              <SendCommentButton type="primary" htmlType="submit">Enviar</SendCommentButton>
            </Form.Item>
          </Form>
        </UserComment>
      </CommentsSection>

      <Footer />
    </>
  );
};

export default Product;