import { FETCH_PRODUCTS, FETCH_PRODUCT, RESET_PRODUCT, RESET_PRODUCTS } from '../actions/types';
const initialStates = {
  products: [],
  product: null
};

export default function(state = initialStates, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, products: action.payload};
    case FETCH_PRODUCT:
      return {...state, product: action.payload};
    case RESET_PRODUCTS:
      return {...state, products: []};
    case RESET_PRODUCT:
      return {...state, product: null};
    default:
      return state;
  }
}
