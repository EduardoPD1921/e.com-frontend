import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { FiChevronLeft } from 'react-icons/fi';

import Navbar from '../../components/layout/Navbar';
import ProductRow from '../../components/ProductRow';

import {
  CheckoutContainer,
  InfoContainer,
  ProductsInfo,
  PaymentInfo,
  ProductsInfoTitle,
  TitleRow,
  CheckoutPriceInfo,
  ContinueShoppingContainer,
  SubtotalInfo,
  PriceInfo,
  PriceInfoRow,
  PriceKey,
  PriceValue,
  TotalKey,
  TotalPrice,
  TextRow
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

  function renderSubtotal() {
    const arrPrices = addedProductsToCart.map(product => {
      return product.price * (product.quantity || 1);
    });

    if (arrPrices.length > 0) {
      const subtotal = arrPrices.reduce(function(previousPrice, currentPrice) {
        return previousPrice + currentPrice;
      });

      return subtotal.toFixed(2).replace('.', ',');
    };

    return 0;
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
            <CheckoutPriceInfo>
              <ContinueShoppingContainer>
                <TextRow>
                  <FiChevronLeft style={{ fontSize: 30 }} />
                  <a href="/home">Continuar Comprando</a>
                </TextRow>
              </ContinueShoppingContainer>
              <SubtotalInfo>
                <PriceInfo>
                  <PriceInfoRow>
                    <PriceKey>Subtotal:</PriceKey>
                    <PriceValue>R${renderSubtotal()}</PriceValue>
                  </PriceInfoRow>
                  <PriceInfoRow>
                    <PriceKey>Frete:</PriceKey>
                    <PriceValue>Grátis</PriceValue>
                  </PriceInfoRow>
                </PriceInfo>
                <PriceInfoRow marginTop={20}>
                  <TotalKey>Total:</TotalKey>
                  <TotalPrice>R${renderSubtotal()}</TotalPrice>
                </PriceInfoRow>
              </SubtotalInfo>
            </CheckoutPriceInfo>
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