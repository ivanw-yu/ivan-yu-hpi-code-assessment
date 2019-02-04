import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';


// export default createStore(rootReducer, {}, applyMiddleware(thunk));
var isChrome = (( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ) &&
                ( navigator.vendor.toLowerCase().indexOf("google") > -1 ) );

let store;
const initialStates = {}
if(isChrome){
  // createStore's parameters are: reducers, initial states, middleware passed to applyMiddleware
  // the 2nd argument of compose() will allow the Chrome Redux Extension to run.
  store = createStore(rootReducers,
                            initialStates,
                            compose(applyMiddleware(thunk),
                                    window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                    window.__REDUX_DEVTOOLS_EXTENSION__()))
}else{
  store = createStore( rootReducers,
                       initialStates,
                       applyMiddleware(thunk) );
}

export default store;
