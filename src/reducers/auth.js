import {
  REQUEST_AUTH,
  RECEIVE_AUTH,
} from '../actions/auth';

const INITIAL_STATE = {
  isFetching: false,
  authenticated: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_AUTH:
      return {
        ...state,
        isFetching: false,
        authenticated: action.payload
      };
    default:
      return state;
    }
  }

  export default auth;