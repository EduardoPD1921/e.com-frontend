import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import api from '../../api';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProductInfo from '../../components/ProductInfo';
import CommentForm from '../../components/CommentForm';

import { Divider, Rate, Avatar } from 'antd';
import { LoadingOutlined, UserOutlined } from '@ant-design/icons';

import {
  ProductInfoSection,
  CommentsSection,
  UserComment,
  CommentCard,
  CommentAuthor,
  CommentDate,
  Comment
} from './styles';

function Product() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    api.get(`/product/getById/${id}`)
      .then(resp => {
        setProduct(resp.data);
        console.log(resp);
      })
      .catch(error => console.log(error.response));
  }, [id]);

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

  function renderComments() {
    if (product) {
      return product.comments.map(comment => {
        return (
          <CommentCard>
            <CommentAuthor><Avatar style={{ marginRight: 10 }} icon={<UserOutlined />} />{comment.authorName}</CommentAuthor>
            <CommentDate>{getDateString(comment.postDate)}</CommentDate>
            <Rate allowHalf disabled defaultValue={comment.stars} />
            <Comment>
              {comment.comment}
            </Comment>
          </CommentCard>
        );
      });
    };
  };

  function getDateString(fullDate) {
    const date = new Date(fullDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
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
          <CommentForm productId={id} />
        </UserComment>
        {renderComments()}
      </CommentsSection>

      <Footer />
    </>
  );
};

export default Product;