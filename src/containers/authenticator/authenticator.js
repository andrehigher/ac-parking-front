import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

import { fetchAuth } from '../../actions/auth';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

class Auth extends Component {
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
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <Segment>
          <Dimmer active>
            <Loader indeterminate>Authenticating</Loader>
          </Dimmer>
    
        </Segment>
      </div>
    );
  }
}

export default connect((state) => {
    return {
        auth: state.auth
    };
})(Auth);
