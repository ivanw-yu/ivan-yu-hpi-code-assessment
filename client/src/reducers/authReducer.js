import {LOGIN_USER} from '../actions/types';

const initialStates = {
  isLoggedIn: false,
  name: null,
  token: null
};

export default function(state = initialStates, action){
  switch(action.type){
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}
