import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions';
import ProductsList from './ProductsList';

class ProductsPage extends React.Component{

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    const {products} = this.props.products;
    return products ? (
      <div>
        <ProductsList products = {products} />
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({products: state.products && state.products.products });
export default connect(mapStateToProps, {fetchProducts})(ProductsPage);
