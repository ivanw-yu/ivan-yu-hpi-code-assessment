import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/commons/Navbar';

import './App.css';

class App extends React.Component {
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

export default App;
