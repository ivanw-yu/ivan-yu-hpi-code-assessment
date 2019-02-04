import React from 'react';
import {Link} from 'react-router-dom';

import ProductMedia from './ProductMedia';
import {formatDate} from '../../helpers/date';

export default ({product}) => (
  <div className = "card-col">
    <div className = "card">
      <ProductMedia media={product.media} />
      <h5>{product.title}</h5>
      <h6>Price: {product.price_str}</h6><h6>{formatDate(product.created_at)}</h6>
      <h6>Seller: {product.seller.first_name + " " + product.seller.last_name}</h6>
      <Link to={`/products/${product.product_id}`}
            className="card-link" />
    </div>
  </div>
);
