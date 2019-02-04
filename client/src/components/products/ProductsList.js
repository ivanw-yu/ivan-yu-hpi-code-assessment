import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProducts, resetProducts} from '../../actions';
import ProductCard from './ProductCard';

class ProductsList extends React.Component{

  componentWillUnmount(){
    console.log("unmounting");
  }
  render(){
    const {products} = this.props;
    return products && (
      products.map(product => (
          <ProductCard product = {product}
                       id = {product.product_id}/>
        )
      )
    )
  }
}

export default connect(null,{resetProducts})(ProductsList);




//
// const mapStateToProps = state => ({products: state.products && state.products.products });
// export default connect(mapStateToProps, {fetchProducts})(ProductsList);
