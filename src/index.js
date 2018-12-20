import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import Cookies from 'js-cookie';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';

import reducers from './reducers';
import app from './components/app/app';
import login from './containers/login/login';

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware),
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Cookies.get('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={login} />
        <PrivateRoute path="/" component={app} />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
