import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Routes from './Routes';
import Navbar from './components/commons/Navbar';
import {authenticate} from './actions';

import './App.css';

class App extends React.Component {

  componentDidMount(){
      // every time the App loads on the screen, authenticate will be
      // called to put the credentials from the localStorage to
      // into the redux store.
      this.props.authenticate();
  }

  render() {
    return (
      <div className = "container">
        <Navbar />
        <BrowserRouter>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {authenticate})(App);
