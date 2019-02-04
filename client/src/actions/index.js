import axios from 'axios';

import { LOGIN_USER,
         LOGOUT_USER,
         FETCH_PRODUCTS,
         FETCH_PRODUCT,
         FETCH_USERS } from './types';

import {getToken, setToken, setAuthUser} from '../helpers/auth';

export const loginUser = (name, history) => async dispatch => {
    try{
      const res = await axios.post('/api/auth/login',{name});
      const {data} = res;
      if(data && data.success){
        delete data.success;
        const auth = {...data};
        setAuthUser(auth);
        dispatch({type: LOGIN_USER, payload: auth});
        history.push('/products');
      }
    }catch(e){

    }
};


// will be called every page to see if the user is logged in.
// if the user is logged in, then the auth redux state will be
// set to the user. This prevents the state from reseting on
// refresh, or when another url is visited from the address bar.
export const authenticate = () => async dispatch => {
  try{
    const user = localStorage.getItem('user');
    console.log("ERE", user)
    const res = await axios.get(`/api/auth/verify`, {token: user.token});
    if(res.data && res.data.success){
      delete res.data.success;
      const auth = {...res.data};
      console.log("HERE!", auth)
      dispatch({type: LOGIN_USER, payload: auth});
    }
  }catch(e){

  }
  return false;
};
