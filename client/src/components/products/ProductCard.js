import React from 'react';
import {Link} from 'react-router-dom';

import ProductMedia from './ProductMedia';
import ProductImage from './ProductImage';
import {formatDate} from '../../helpers/date';

export default ({product}) => (
  <div className = "card-col">
    <div className = "card">
      {true || <ProductMedia media={product.media} />}
      <ProductImage media={product.media}
                    imageUrl={product.media[0].sizes[0].url}/>
      <h5>{product.title}</h5>
      <h6>Price: {product.price_str}</h6><h6>{formatDate(product.created_at)}</h6>
      <h6>Seller: {product.seller.first_name + " " + product.seller.last_name}</h6>
      <Link to={`/products/${product.product_id}`}
            className="card-link" />
    </div>
  </div>
);
