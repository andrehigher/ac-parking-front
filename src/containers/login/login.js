import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginButton from '../../components/login-button/login-button';
import './login.css';

class Login extends Component {

  componentWillMount() {
    switch( process.env.NODE_ENV ) {
      case "staging":
        this.setState({ssoURL: "-staging"});
        return;

      case "development":
        this.setState({ssoURL: "-local"});
        return;

      default:
        return;
    }
}

  render() {
    const { ssoURL } = this.state;

    return (
      <div className="login-container">
        <div className="ui text container">
          <h1 className="ui inverted header">AC-Parking</h1>
          <h2 className="ui inverted header">The garage management system from Avenue Code.</h2>
          <LoginButton
            ssoURL={ssoURL}
          />
        </div>
      </div>
    );
  }
}

export default connect( (state) => {
    return {
        auth: state.auth
    }
} )( Login );