import React from 'react';
import {connect} from 'react-redux';


class Navbar extends React.Component{
  render(){
    return "Navbar";
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Navbar);
