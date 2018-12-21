import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK,
  REQUEST_NEXT_WEEK,
  RECEIVE_NEXT_WEEK,
} from '../constants/garage';

const INITIAL_STATE = {
  isFetching: false,
  spots: [],
  to: null,
  from: null,
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
        from: action.from,
        to: action.to,
      });
    case REQUEST_NEXT_WEEK:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_NEXT_WEEK:
      return Object.assign({}, state, {
        isFetching: false,
        currentWeek: ++state.currentWeek,
        spots: action.spots,
        from: action.from,
        to: action.to,
      });
    default:
      return state;
    }
  }

  export default garage;