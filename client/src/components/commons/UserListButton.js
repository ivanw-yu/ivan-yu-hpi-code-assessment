import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers, resetUsers} from '../../actions/index';

class UserListButton extends React.Component{

  constructor(){
    super();
    this.state = {
      userView : false
    }
  }

  onUsersButtonClick(){
    this.setState((prevState, props) => {
      const userView = !prevState.userView;
      console.log('userView',userView);
      if(!userView){
        return this.props.fetchUsers();
      }
      this.props.resetUsers();
      return {userView}
    });
  }

  usersAreCurrentlyViewed(){
    const {users} = this.props;
    return users;
  }

  renderUserList(){
    const {users} = this.props;
    console.log("users", users);
    return users && users.map( user => (
        <div id = {user._id}> {user.first_name + ' ' + user.last_name} </div>
      )
    );
  }

  render(){
      const {users} = this.props;
      console.log('users', users);
      return (
        <React.Fragment>
          <button onClick = {()=>this.onUsersButtonClick()}>Users</button>
          {users && this.renderUserList()}
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({users: state.users && state.users.users});
// export default connect(mapStateToProps)(Navbar);
export default connect(mapStateToProps, {fetchUsers, resetUsers})(UserListButton);
