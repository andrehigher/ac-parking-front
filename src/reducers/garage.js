import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK,
} from '../constants/garage';

const INITIAL_STATE = {
  isFetching: false,
  spots: [],
};

const garage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENT_WEEK:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_CURRENT_WEEK:
      return Object.assign({}, state, {
        isFetching: false,
        spots: action.spots,
      });
    default:
      return state;
    }
  }

  export default garage;