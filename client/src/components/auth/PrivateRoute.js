import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

// This component protects the products route from users
// who haven't logged in.
export default ({ component: Component, path }) => {

    return (
        <Route path = {path}
               exact
               render = {
                 (props) => (
                  (localStorage.getItem('user') != null) ?
                     <React.Fragment>
                        <Component {...props} />
                     </React.Fragment>
                   : <Redirect to ="/" />)
               }
             />
    );
}
