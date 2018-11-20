import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import logo from './logo.svg';
import './app.css';
import Cookies from 'js-cookie';

import { fetchAuth } from '../../actions/auth';

class App extends Component {
  state = {
    redirect: false
  }

  componentWillMount() {
    if (!Cookies.get('authToken')) {
      this.setState({ redirect: true });
    } else {
      this.props.dispatch(fetchAuth(this.state, Cookies.get('authToken')));
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login'/>;
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect((state) => {
  return {
      auth: state.auth
  };
})(App);
