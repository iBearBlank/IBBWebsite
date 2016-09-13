import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import reducers from '../client/reducers/';
import { match, RouterContext } from 'react-router';
import routes from '../client/config/routes.js';

const app = express();
//const request = require('request');

const handleRender = app.get('/', function(req, res) {
  //const defaultState = 1;
  // Create store
  const store = createStore(reducers);
  // Get initial state
  const initialState = store.getState();

  const routesMap = {
    routes: routes,
    location: req.url,
  }

  match(routesMap, function(error, redirectLocation, routeContext) {
    if (error) {
      res.status(500).send("Could not fulfill this request. Please try again later.")
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (routeContext) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...routeContext} />
        </Provider>)
      res.status(200).send(renderFullPage(html,initialState))
    } else {
      res.status(404).send('Not found')
    }
  })
  // Render and server page
  //res.status(200).send(renderFullPage(component, initialState));
});

//Prepare DOM on server side
function renderFullPage(component,initialState){

  return `<!doctype html>
    <html lang="en" >
      <head>
        <meta charset="utf-8" >
        <title> Starter-kit </title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
      </head>
      <body>
        <div id="app">${component}</div>
        <script>
         window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="./bundle.js" ></script>
      </body>
    </html>
    `
}

module.exports = handleRender;
      
