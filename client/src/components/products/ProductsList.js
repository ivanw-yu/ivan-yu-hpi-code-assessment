import React from 'react';
import {connect} from 'react-redux';


class ProductsList extends React.Component{
  render(){
    return "ProductsList";
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(ProductsList);
