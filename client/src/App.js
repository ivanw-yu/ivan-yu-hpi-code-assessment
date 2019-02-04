import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Routes from './Routes';
import Navbar from './components/commons/Navbar';
import {authenticate} from './actions';

import './App.css';

class App extends React.Component {

  componentDidMount(){
      this.props.authenticate();
  }

  render() {
    return (
      <div className = "container">
        <Navbar />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {authenticate})(App);
