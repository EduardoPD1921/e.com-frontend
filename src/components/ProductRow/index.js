import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

import { message } from 'antd';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { VscClose } from 'react-icons/vsc';

import {
  TableProductDisplay,
  TableProductInfo,
  ProductTitle
} from './styles';

function ProductRow({ id, title, price, image, quantity }) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  const { removeProductFromCart, addProductQuantity, removeProductQuantity } = useContext(CartContext);

  function increaseProductQuantity() {
    addProductQuantity(id)
      .then(resp => {
        console.log(resp)
        setProductQuantity(prevState => prevState + 1);
      })
      .catch(error => errorHandler(error));
  };

  function decreaseProductQuantity() {
    if (productQuantity > 1) {
      removeProductQuantity(id)
        .then(resp => {
          console.log(resp);
          setProductQuantity(prevState => prevState - 1);
        })
        .catch(error => errorHandler(error));
    }
  };

  function errorHandler(error) {
    if (error.data === 'access-denied') {
      return window.location.replace('/signIn');
    };

    message.error('Erro interno');
    console.log(error);
  };

  return (
    <tr>
      <TableProductDisplay>
        <img
          style={{ marginTop: 10 }}
          src={image}
          alt="product"
          width={150} 
        />
        <TableProductInfo>
          <ProductTitle>
            {title}
          </ProductTitle>
        </TableProductInfo>
      </TableProductDisplay>
      <td>
        <MinusOutlined onClick={() => decreaseProductQuantity()} style={{ fontSize: 20 }} />
        <span style={{ marginLeft: 15, marginRight: 15 }}>{productQuantity}</span>
        <PlusOutlined onClick={() => increaseProductQuantity()} style={{ fontSize: 20 }} />
      </td>
      <td>
        <h3>R${price.toFixed(2).replace('.', ',')}</h3>
      </td>
      <td>
        <VscClose onClick={() => removeProductFromCart(id)} style={{ fontSize: 25, cursor: 'pointer' }} />
      </td>
    </tr>
  );
};

export default ProductRow;