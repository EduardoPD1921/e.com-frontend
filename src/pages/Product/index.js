import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import api from '../../api';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProductInfo from '../../components/ProductInfo';
import CommentForm from '../../components/CommentForm';
import CommentCard from '../../components/CommentCard';

import { Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {
  ProductInfoSection,
  CommentsSection,
  UserComment
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
          <CommentCard
            authorName={comment.authorName}
            postDate={comment.postDate}
            stars={comment.stars}
            comment={comment.comment} 
          />
        );
      });
    };
  };

  return (
    <>
      <Navbar />

      <ProductInfoSection>
        {renderProductInfo()}
      </ProductInfoSection>

      <CommentsSection id="commentSection">
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