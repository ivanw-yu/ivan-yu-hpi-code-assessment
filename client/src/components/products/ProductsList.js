import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProducts} from '../../actions';
import ProductCard from './ProductCard';

export default ({products}) => (
  products && (
    products.map(product => (
        <ProductCard product = {product}
                     id = {product.product_id}/>
      )
    )
  )
);




//
// const mapStateToProps = state => ({products: state.products && state.products.products });
// export default connect(mapStateToProps, {fetchProducts})(ProductsList);
