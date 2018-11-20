import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducer from './reducers';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

/**
 * CONTAINERS
 */
import app from './containers/app/app';
import login from './containers/login/login';
import authenticator from './containers/authenticator/authenticator';

import * as serviceWorker from './serviceWorker';

const middleware = [ thunk ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={app} />
        <Route path="/login" exact={true} component={login} />
        <Route path="/auth/success" exact={true} component={authenticator} />
        {/* <Route path="//auth/failure" exact={true} component={login} /> */}
      </Switch>
    </ BrowserRouter>
  </Provider>, 
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
