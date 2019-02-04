import React from 'react';

import LoginForm from './LoginForm';
import Footer from '../commons/Footer';
export default () => (
  <React.Fragment>
    <div className = "background centered-contents">
      <LoginForm />
    </div>
    <Footer />
  </React.Fragment>
);
