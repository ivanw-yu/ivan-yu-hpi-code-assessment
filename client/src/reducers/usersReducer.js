import {FETCH_USERS, RESET_USERS} from '../actions/types';

const initialStates = {
  users: null
}

export default function(state = initialStates, action){
  switch(action.type){
    case FETCH_USERS:
      console.log('action.payload', action.payload)
      return action.payload;
    case RESET_USERS:
      return null;
    default:
      return state;
  }
}
