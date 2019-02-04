import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchProduct} from '../../actions/index';
import ProductImagesView from './ProductImagesView';
// import ProductMedia from './ProductMedia';
// import ProductMediaScrollBar from './ProductMediaScrollBar';

class ProductPage extends React.Component{

  componentDidMount(){
    console.log("this.props.match.params.id", this.props.match.params.id);
    this.props.fetchProduct(this.props.match.params.id);
  }

  render(){
    const {product} = this.props;
    return product && (
      <div className= "row ">
        <div className= "half-page-col product-media-area">
            <ProductImagesView media={product.media} />
        </div>
      </div>
    );
  }
  // render(){
  //   const {product} = this.props;
  //   return product && (
  //     <div className= "row ">
  //       <div className= "half-page-col product-media-area">
  //         <div className = "product-media">
  //           <ProductImage media={product.media} />
  //           <ProductMediaScrollBar media={product.media} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

}

const mapStateToProps = state => ({product: state.products && state.products.product });
// export default connect(mapStateToProps)(ProductPage);
export default withRouter(connect(mapStateToProps, {fetchProduct})(ProductPage));
