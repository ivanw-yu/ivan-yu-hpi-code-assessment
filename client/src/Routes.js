import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/auth/PrivateRoute';
import ProductsPage from './components/products/ProductsPage';
import ProductPage from './components/products/ProductPage';
import LoginPage from './components/auth/LoginPage';

console.log("type of", typeof ProductsPage);
export default () => (
  <React.Fragment>
    <Route path = "/" exact component = {LoginPage} />
    <PrivateRoute path = "/products" component = {ProductsPage} />
    <PrivateRoute path = "/products/:id" component = {ProductPage} />
  </React.Fragment>
);
