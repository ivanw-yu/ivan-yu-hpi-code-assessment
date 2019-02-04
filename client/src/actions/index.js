import axios from 'axios';

import { LOGIN_USER,
         LOGOUT_USER,
         FETCH_PRODUCTS,
         FETCH_PRODUCT,
         RESET_PRODUCT,
         RESET_PRODUCTS,
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
    const user = getAuthUser();
    const res = await axios.get(`/api/auth/verify`, {headers: getAuthHeaders() });
    if(res.data && res.data.success){
      delete res.data.success;
      const auth = {...res.data.user};
      dispatch({type: LOGIN_USER, payload: auth});
    }
  }catch(e){
    console.log(e);
  }
  return false;
};

export const fetchUsers = () => async dispatch => {
  try{
    const res = await axios('/api/users', {headers: getAuthHeaders()});
    if(res && res.data){
      dispatch({type: FETCH_USERS, payload: res.data.users});
    }
  }catch(e){

  }
}

export const fetchProducts = (queryString) => async dispatch => {
  const url = `/api/products${queryString && queryString.length > 1 ? '?' + queryString : ''}`;

  try{
    const res = await axios(url, {headers: getAuthHeaders()});
    if(res && res.data){
      return dispatch({type: FETCH_PRODUCTS, payload: {...res.data, productsURL:window.location.pathname}});
    }
  }catch(e){
    console.log(e);
  }
}
export const resetProducts = () => dispatch => {
  dispatch({type:RESET_PRODUCTS, payload: null});
}
export const resetProduct = () => dispatch => {
  dispatch({type:RESET_PRODUCT, payload: null});
}

export const fetchProduct = (id) => async dispatch => {
  try{
    const res = await axios(`/api/products/${id}`, {headers: getAuthHeaders()});
    const {data} = res;
    if(data && data.success){
      return dispatch({type: FETCH_PRODUCT, payload: data.product});
    }
  }catch(e){
    console.log(e)
  }
}

export const logout = () => async dispatch => {
  localStorage.removeItem('user');
  dispatch({type: LOGOUT_USER, payload: null});
  window.location.href = "/";
}

export const resetUsers = () => async dispatch => {
  dispatch({type: RESET_USERS, payload: []});
}
