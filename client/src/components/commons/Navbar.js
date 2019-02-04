import React from 'react';
import {connect} from 'react-redux';

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

  render(){
    const {auth,users} = this.props;
    console.log("auth", auth);
    return (
      <nav className="navbar">

        { auth && auth.name && (
          <React.Fragment>
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

const mapStateToProps = state => ({auth: state.auth});
// export default connect(mapStateToProps)(Navbar);
export default connect(mapStateToProps, {fetchUsers, resetUsers})(Navbar);
