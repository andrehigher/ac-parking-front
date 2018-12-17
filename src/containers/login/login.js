import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from '../../components/login-button/login-button';

const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 200px;
`;

const SloganStyled = styled.h1`
  font-size: 4em;
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 3em;
`;

const WarningStyled = styled.h1`
  font-size: 1.7em;
  font-weight: normal;
  margin-top: 1.5em;
`;

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
    const { auth } = this.props;

    if (auth.user) {
      return <Redirect to='/'/>;
    }

    return (
      <LoginStyled>
          <div className="ui text container">
            <SloganStyled className="ui inverted header">AC-Parking</SloganStyled>
            <WarningStyled className="ui inverted header">The garage management system from Avenue Code.</WarningStyled>
            <LoginButton
              ssoURL={ssoURL}
            />
          </div>
      </LoginStyled>
    );
  }
}

export default connect( (state) => {
    return {
        auth: state.auth
    }
} )( Login );