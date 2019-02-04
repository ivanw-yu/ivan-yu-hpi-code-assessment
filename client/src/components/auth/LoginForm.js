import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loginUser} from '../../actions';

class LoginForm extends React.Component{

  constructor(){
    super();
    this.state = {
      name: '',
      error: ''
    }

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(value){
      this.setState((state, props) => ({
          name: value
        })
      );
  }

  onSubmit(e){
    // prevent page from redirecting to another url.
    e.preventDefault();
    const {name} = this.state,
          {loginUser, history} = this.props;

    loginUser(name, history);
  }

  renderForm(){
    console.log(this.state.name)
    return (
      <form onSubmit = {this.onSubmit} >
        <div className = "form-group">
          Name:
          <input type = "text"
                 value = {this.state.name}
                 name="name"
                 onChange={(e) => this.onChange(e.target.value)} />
          <br />
          <br />
          <button className="theme-button">Submit</button>
        </div>
      </form>
    )
  }

  renderError(){
    const {error} = this.state;
    return (
        <div>
          {error}
        </div>
      );
  }
  render(){
    return (
      <div className = "box center-form">
        {this.renderForm()}
        {this.renderError()}
      </div>
    );
  }
}

// use withRouter to add the history object as props to LoginForm,
// in order to programmatically navigate to the products page
// on successful login.
export default withRouter(connect(null, {loginUser})(LoginForm));
