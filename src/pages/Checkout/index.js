import React from 'react';

import Navbar from '../../components/layout/Navbar';

import {
  CheckoutContainer,
  InfoContainer,
  ProductsInfo,
  PaymentInfo,
  ProductsInfoTitle
} from './styles';

function Checkout() {
  return (
    <>
      <Navbar />

      <CheckoutContainer>
        <InfoContainer>
          <ProductsInfo>
            <ProductsInfoTitle>Seu carrinho</ProductsInfoTitle>
            <table>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço total</th>
              </tr>
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