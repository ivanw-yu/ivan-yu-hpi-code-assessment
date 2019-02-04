import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions';
import ProductsList from './ProductsList';
import ProductsListSortBar from './ProductsListSortBar';

class ProductsPage extends React.Component{
  constructor(){
    super()
    this.state = {
      showProducts : true
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    this.fetchProductsWithQueryString()
  }

  fetchProductsWithQueryString(){
    const queryStringSplit = window.location.pathname.split('?'),
          queryString = queryStringSplit.length > 1 ? queryStringSplit[1] : '';
    this.props.fetchProducts(queryStringSplit);
  }

  componentDidUpdate(prevProps, prevState){
      if(prevProps.productsURL !== this.props.productsURL){
        this.fetchProductsWithQueryString();
        // this.setState((prevState, props) => ({showProducts: !prevState.showProducts}));
        // setTimeout( ()=> this.setState((prevState, props) => ({showProducts: !prevState.showProducts}))
        //             , 1000)
      }
  }

  render(){
    const {products} = this.props.products;
    return products ? (
      <div className="background">
        <ProductsListSortBar />
        <ProductsList products = {products} />
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({products: state.products && state.products.products,
                                   productsURL: state.products && state.products.products.productsURL});
export default connect(mapStateToProps, {fetchProducts})(ProductsPage);
