import React from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';

import {fetchUsers, resetUsers} from '../../actions/index';
import UserListButton from './UserListButton';

class Navbar extends React.Component{

  constructor(){
    super();
    this.state = {
      userView : false
    }
  }
  onUsersButtonClick(users){
    this.setState((state, props) => ({userView: !state.userView}));
    if(!users){
      return this.props.fetchUsers();
    }
    this.props.resetUsers();
  }

  usersAreCurrentlyViewed(){
    const {users} = this.props;
    return users;
  }

  renderUserList(){
    const {users} = this.props;
    console.log("users", users);
    return users.map( user => (
        <div id = {user._id}> {user.name} </div>
      )
    );
  }

  navigateProductsListPage(){
    const {history,productsURL} = this.props;
    window.location.href = productsURL;
  }
  // navigateProductsListPage(){
  //
  // }

  renderBackButton(){
    console.log('window.location.pathname',window.location.pathname, /\/products\/[a-zA-Z0-9]+/.test(window.location.pathname))
    return this.props.product && ( <div className="nav-left">
              <button className="nav-button"
                      onClick={()=>this.navigateProductsListPage()}>
                      Go back to main page
              </button>
            </div>)
  }

  render(){
    const {auth,users, match} = this.props;
    console.log("auth", auth);
    return (
      <nav className="navbar">
        { auth && auth.name && (
          <React.Fragment>
            {this.renderBackButton()}
            <div className="nav-right">
              <UserListButton />
            </div>
            <div className="nav-right">
              Welcome, {auth.name}!
            </div>
          </React.Fragment>
        )
      }
      </nav>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth,
                                    productsURL: state.products && state.products.products.productsURL,
                                    product: state.products.product});
// export default connect(mapStateToProps)(Navbar);
export default connect(mapStateToProps, {fetchUsers, resetUsers})(Navbar);
