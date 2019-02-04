import axios from 'axios';

import { LOGIN_USER,
         LOGOUT_USER,
         FETCH_PRODUCTS,
         FETCH_PRODUCT,
         FETCH_USERS } from './types';

export const loginUser = (name) => async dispatch => {
    try{
      const res = await axios.post('/api/auth/login',{name});
      const {data} = res;
      if(data && data.success){
        delete data.success;
        const auth = {...data};
        dispatch({type: LOGIN_USER, payload: auth});
      }
    }catch(e){

    }
};
