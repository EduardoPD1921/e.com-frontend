import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { Radio, Input, DatePicker } from 'antd';

import { FiChevronLeft } from 'react-icons/fi';
import { BsCreditCard } from 'react-icons/bs';
import { ImPaypal } from 'react-icons/im';
import { FaUserAlt } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';

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
  TextRow,
  PaymentInfoTitle,
  PaymentMethodContainer,
  PaymentMethodTitle,
  PaymentMethodRow,
  PaymentMethodText,
  InfoRow,
  CheckoutButton
} from './styles';

function Checkout() {
  const { addedProductsToCart } = useContext(CartContext);

  const monthFormat = 'MM/YYYY';

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
            <PaymentInfoTitle>Informações de pagamento</PaymentInfoTitle>
            <PaymentMethodContainer>
              <PaymentMethodTitle>Forma de pagamento:</PaymentMethodTitle>
              <Radio.Group>
                <PaymentMethodRow>
                  <Radio value={1}>
                    <BsCreditCard style={{ fontSize: 20, position: 'absolute', left: 30 }} />
                    <PaymentMethodText>Cartão de crédito</PaymentMethodText>
                  </Radio>
                </PaymentMethodRow>
                <PaymentMethodRow>
                  <Radio value={2}>
                    <ImPaypal style={{ fontSize: 20, position: 'absolute', left: 30 }} />
                    <PaymentMethodText>PayPal</PaymentMethodText>
                  </Radio>
                </PaymentMethodRow>
              </Radio.Group>
              <Input 
                placeholder="Nome no cartão" 
                prefix={<FaUserAlt />}
                style={{ marginTop: 50 }} 
              />
              <Input
                placeholder="Número do cartão"
                prefix={<BsCreditCard />}
                style={{ marginTop: 30 }}
              />
              <InfoRow>
                <DatePicker 
                  format={monthFormat}
                  placeholder="Data de vencimento"
                  picker="month"
                  style={{ marginTop: 30, width: 290 }}
                />
                <Input  
                  placeholder="CVV"
                  prefix={<HiLockClosed />}
                  style={{ marginTop: 30, width: 70, marginLeft: 20 }}
                />
              </InfoRow>
              <CheckoutButton>Finalizar Compra</CheckoutButton>
            </PaymentMethodContainer>
          </PaymentInfo>
        </InfoContainer>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;