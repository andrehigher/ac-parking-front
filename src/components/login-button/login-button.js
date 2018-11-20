import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ssoURL}) => (
  <a className='ui huge primary button' href={`http://sso.avenuecode.com/api/app/ac-parking${ssoURL}`}>
    Login <i aria-hidden="true" className="right arrow icon"></i>
  </a>
);

LoginButton.propTypes = {
  ssoURL: PropTypes.string.isRequired
}

export default LoginButton;