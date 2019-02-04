import {LOGIN_USER, LOGOUT_USER} from '../actions/types';

const initialStates = {
  isLoggedIn: false,
  name: null,
  token: null
};

export default function(state = initialStates, action){
  switch(action.type){
    case LOGIN_USER:
      return {...action.payload, isLoggedIn: true};
    case LOGOUT_USER:
      return {isLoggedIn: false, name: null, token: null};
    default:
      return state;
  }
}
