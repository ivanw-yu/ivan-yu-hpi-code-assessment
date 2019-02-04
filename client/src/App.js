import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className = "container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
