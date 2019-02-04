import { FETCH_PRODUCTS, FETCH_PRODUCT, RESET_PRODUCT } from '../actions/types';
const initialStates = {
  products: [],
  product: null
};

export default function(state = initialStates, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, products: action.payload};
    case FETCH_PRODUCT:
      console.log("FETCH_PRODUCT", action.payload)
      return {...state, product: action.payload};

    case RESET_PRODUCT:
      return {...state, product: null};
    default:
      return state;
  }
}
