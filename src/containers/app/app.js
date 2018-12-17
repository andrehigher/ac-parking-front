import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BottomNav from '../../components/bottom-nav/bottom-nav';
import Garage from '../../components/garage/garage';

import { fetchCurrent } from '../../actions/garage';

class App extends Component {

  render() {
    const { auth, dispatch } = this.props;
    
    return (
      <div className="App">
        <BottomNav user={auth.user} />
        <Garage dispatch={dispatch} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect((state) => {
  return {
    auth: state.auth
  };
})(App);
