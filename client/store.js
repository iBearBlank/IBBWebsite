import { createStore } from 'redux';
import reducers from './reducers';

//const store = createStore(reducers,
//  window.devToolsExtension && window.devToolsExtension()
// );

const initialState = window.__INITIAL_STATE__;
const store = createStore(reducers, initialState)

export default store;
