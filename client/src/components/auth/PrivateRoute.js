import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

export default ({ component: Component, path }) => {
    console.log("Path", path);
    console.log(Component)
    return (
        <Route path = {path}
               exact
               render = {
                 (props) => (
                   <React.Fragment>
                    <Component {...props} />
                   </React.Fragment>)
               }
             />
    );
}
