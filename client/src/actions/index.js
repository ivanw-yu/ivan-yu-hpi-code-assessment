import axios from 'axios';

import { LOGIN_USER,
         LOGOUT_USER,
         FETCH_PRODUCTS,
         FETCH_PRODUCT,
         FETCH_USERS,
         RESET_USERS} from './types';

import { getToken,
         setToken,
         setAuthUser,
         getAuthUser,
         getAuthHeaders } from '../helpers/auth';


export const loginUser = (name, history) => async dispatch => {
    try{
      const res = await axios.post('/api/auth/login',{name});
      const {data} = res;
      if(data && data.success){
        delete data.success;
        const auth = {...data.user, isLoggedIn: true};
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
    const user = getAuthUser()//localStorage.getItem('user');
    console.log("ERE", user, user.token)
    const res = await axios.get(`/api/auth/verify`, {headers: getAuthHeaders() });
    if(res.data && res.data.success){
      delete res.data.success;
      const auth = {...res.data.user};
      console.log("HERE!", auth)
      dispatch({type: LOGIN_USER, payload: auth});
    }
  }catch(e){

  }
  return false;
};

export const fetchUsers = () => async dispatch => {
  try{
    const res = await axios('/api/users', {headers: getAuthHeaders()});
    console.log("FETCH_USERS", res);
    if(res && res.data){
      dispatch({type: FETCH_USERS, payload: res.data.users});
    }
  }catch(e){

  }
}

export const fetchProducts = (page=1, sort, ascending) => async dispatch => {
  const url = `/api/products?sort=${sort ? sort : 'created_date'}&page=${page ? page : 1}`;
  if(ascending)
    url += `ascending=${ascending}`;

  try{
    const res = await axios(url, {headers: getAuthHeaders()});
    if(res && res.data){
      return dispatch({type: FETCH_PRODUCTS, payload: res.data});
    }
  }catch(e){

  }
}

export const fetchProduct = (product) => async dispatch => {

}

export const resetUsers = () => async dispatch => {
  dispatch({type: RESET_USERS, payload: []});
}
