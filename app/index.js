import React from 'react';
import ReactDOM from 'react-dom';
//import './main.css';
//import './flexboxgrid.min.css';
import routes from './config/routes.js';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
    document.getElementById('app')
);
