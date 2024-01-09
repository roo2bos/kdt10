import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div>
          <strong style={{ fontSize: '1.5rem' }}>
            <em>[{product.id}]</em> {product.name}
          </strong>
          <p style={{ marginTop: 0 }}>{product.body}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
