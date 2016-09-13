import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../components/App';
import NoteContainer from '../containers/NoteContainer';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NoteContainer} />
    </Route>
  </Router>
);

export default routes;
