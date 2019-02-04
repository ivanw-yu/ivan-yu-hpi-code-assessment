import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers, resetUsers,logout} from '../../actions/index';
import UserListButton from './UserListButton';

class Navbar extends React.Component{

  constructor(){
    super();
    this.state = {
      userView : false,
      logoutView: false
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
    return users.map( user => (
        <div id = {user._id}> {user.name} </div>
      )
    );
  }

  navigateProductsListPage(){
    const {history,productsURL} = this.props;
    window.location.href = productsURL;
  }

  renderBackButton(){
    return this.props.product && ( <div className="nav-left">
              <button className="nav-button"
                      onClick={()=>this.navigateProductsListPage()}>
                      Go back to main page
              </button>
            </div>)
  }

  getOrResetUsers(){
    const {users} = this.props;
    if(!users)
      return this.props.fetchUsers();

    this.props.resetUsers();

  }

  logout(){
    this.props.logout();
  }
  renderUsers(){
    const {users} = this.props;
    console.log('rendering users', users);
    return users.map(user => (
        <div key={user._id}>
          {user.name}
        </div>
      )
    )
  }

  openOrCloseLogout(){
    this.setState((prevState, props) => ({
      logoutView: !prevState.logoutView
    }));
  }

  render(){
    const { auth, users, match} = this.props,
          { logoutView } = this.state;

    return (
      <nav className="navbar">
        { auth && auth.name && (
          <React.Fragment>
            {this.renderBackButton()}
            <div className="nav-right">
              <button onClick = {() => this.getOrResetUsers()}
                      className = "nav-button">
                {users === null ? 'See all users' : 'Hide user list' }
              </button>
              { users && (
                  <div className="users-list">
                    {this.renderUsers()}
                  </div>
                )
              }
            </div>
            <div className={"nav-right click-div " + (logoutView ? " navbar-active" :"")}
                 onClick={()=>this.openOrCloseLogout()} >
              Welcome, {auth.name}!
              { logoutView && (
                  <div>
                    <button className="logout-button"
                            onClick={() => this.logout()}> Logout</button>
                  </div>
                )
              }
            </div>

          </React.Fragment>
        )
      }
      </nav>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth,
                                    users: state.users && state.users.users,
                                    productsURL: state.products && state.products.products.productsURL,
                                    product: state.products.product});

export default connect(mapStateToProps, {fetchUsers, resetUsers, logout})(Navbar);
