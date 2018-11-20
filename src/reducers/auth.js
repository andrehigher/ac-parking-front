import {
  REQUEST_AUTH,
  RECEIVE_AUTH,
  REQUEST_CHECK_AUTH,
  RECEIVE_CHECK_AUTH
} from '../actions/auth';

const auth = (state = {
    isFetching: false,
    auth: []
  }, action) => {
    switch (action.type) {
      case REQUEST_AUTH:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_AUTH:
        return {
          ...state,
          isFetching: false,
          auth: action.auth,
        };
      case REQUEST_CHECK_AUTH:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_CHECK_AUTH:
        return {
          ...state,
          isFetching: false,
          auth: action.auth,
        };
      default:
        return state;
    }
  }

  export default auth;