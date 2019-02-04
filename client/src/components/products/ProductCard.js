import React from 'react';
import ProductMedia from './ProductMedia';

export default ({product}) => (
  <div className = "card-col">
    <div className = "card">
      <ProductMedia media={product.media} />
      <h6>{product.title}</h6>
    </div>
  </div>
);
