import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App';
import NoteContainer from '../containers/NoteContainer';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NoteContainer} />
    </Route>
  </Router>
);
