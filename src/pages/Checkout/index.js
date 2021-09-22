import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import Navbar from '../../components/layout/Navbar';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { VscClose } from 'react-icons/vsc';

import {
  CheckoutContainer,
  InfoContainer,
  ProductsInfo,
  PaymentInfo,
  ProductsInfoTitle,
  TitleRow,
  TableProductDisplay,
  TableProductInfo,
  ProductTitle
} from './styles';

function Checkout() {
  const [quantity, setQuantity] = useState(1);

  const { addedProductsToCart, removeProductFromCart } = useContext(CartContext);

  function addQuantity() {
    setQuantity(prevState => prevState + 1);
  };

  function removeQuantity() {
    if (quantity > 0) {
      setQuantity(prevState => prevState - 1);
    };
  };

  function renderCheckoutProducts() {
    if (addedProductsToCart) {
      return addedProductsToCart.map(product => {
        return (
          <tr>
            <TableProductDisplay>
              <img 
                style={{ marginTop: 10 }}
                src={product.image} 
                alt="product"
                height={80} 
              />
              <TableProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
              </TableProductInfo>
            </TableProductDisplay>
            <td>
              <MinusOutlined onClick={() => removeQuantity()} style={{ fontSize: 20 }} />
              <span style={{ marginLeft: 15, marginRight: 15 }}>{quantity}</span>
              <PlusOutlined onClick={() => addQuantity()} style={{ fontSize: 20 }} />
            </td>
            <td>
              <h3>R${product.price.toFixed(2).replace('.', ',')}</h3>
            </td>
            <td>
              <VscClose onClick={() => removeProductFromCart(product._id)} style={{ fontSize: 25, cursor: 'pointer' }} />
            </td>
          </tr>
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