import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK,
} from '../constants/garage';

export const requestCurrentWeek = () => ({
  type: REQUEST_CURRENT_WEEK,
});
  
export const receiveCurrentWeek = json => ({
  type: RECEIVE_CURRENT_WEEK,
  spots: json.spots,
  from: json.from,
  to: json.to,
});

export const fetchCurrent = () => dispatch => {
  dispatch(requestCurrentWeek());
  return fetch(`/api/garage/current`)
    .then(response => response.json())
    .then(json => dispatch(receiveCurrentWeek(json)));
};
