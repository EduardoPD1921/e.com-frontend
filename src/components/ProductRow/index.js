import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { VscClose } from 'react-icons/vsc';

import {
  TableProductDisplay,
  TableProductInfo,
  ProductTitle
} from './styles';

function ProductRow({ id, title, price, image, quantity }) {
  const { removeProductFromCart } = useContext(CartContext);

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
        <MinusOutlined style={{ fontSize: 20 }} />
        <span style={{ marginLeft: 15, marginRight: 15 }}>{quantity}</span>
        <PlusOutlined style={{ fontSize: 20 }} />
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