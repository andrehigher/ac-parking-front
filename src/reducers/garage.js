import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK,
} from '../actions/garage';

const INITIAL_STATE = {
  isFetching: false,
  garage: [],
};

const garage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENT_WEEK:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_CURRENT_WEEK:
      return {
        ...state,
        isFetching: false,
        garage: action.payload
      };
    default:
      return state;
    }
  }

  export default garage;