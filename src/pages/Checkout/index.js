import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import Navbar from '../../components/layout/Navbar';
import ProductRow from '../../components/ProductRow';

import {
  CheckoutContainer,
  InfoContainer,
  ProductsInfo,
  PaymentInfo,
  ProductsInfoTitle,
  TitleRow
} from './styles';

function Checkout() {
  const { addedProductsToCart } = useContext(CartContext);

  function renderCheckoutProducts() {
    if (addedProductsToCart) {
      return addedProductsToCart.map(product => {
        return (
          <ProductRow
            id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity} 
          />
        );
      });
    };
  };

  return (
    <>
      <Navbar />

      <CheckoutContainer>
        <InfoContainer>
          <ProductsInfo>
            <ProductsInfoTitle>Seu carrinho</ProductsInfoTitle>
            <table>
              <TitleRow>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço total</th>
              </TitleRow>
              {renderCheckoutProducts()}
            </table>
          </ProductsInfo>
          <PaymentInfo>
            test
          </PaymentInfo>
        </InfoContainer>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;