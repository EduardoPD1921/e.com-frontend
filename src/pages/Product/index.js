import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProductInfo from '../../components/ProductInfo';

import { LoadingOutlined } from '@ant-design/icons';

import { ProductPageSection } from './styles';

function Product() {
  const [product, setProduct] = useState();

  const { id } = useParams();

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

  return (
    <>
      <Navbar />

      <ProductPageSection>
        {renderProductInfo()}
      </ProductPageSection>

      <Footer />
    </>
  );
};

export default Product;