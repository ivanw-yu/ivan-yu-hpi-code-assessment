import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/types';
const initialStates = {
  products: [],
  product: null
};

export default function(state = initialStates, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, products: action.payload};
    default:
      return state;
  }
}
