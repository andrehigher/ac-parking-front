import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK,
  REQUEST_NEXT_WEEK,
  RECEIVE_NEXT_WEEK,
  REQUEST_PREV_WEEK,
  RECEIVE_PREV_WEEK,
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

export const requestNextWeek = () => ({
  type: REQUEST_NEXT_WEEK,
});
  
export const receiveNextWeek = json => ({
  type: RECEIVE_NEXT_WEEK,
  spots: json.spots,
  from: json.from,
  to: json.to,
});

export const fetchNext = () => dispatch => {
  dispatch(requestNextWeek());
  return fetch(`/api/garage`, {
    method: 'post',
    body: 'preview=true',
  })
    .then(response => response.json())
    .then(json => dispatch(receiveNextWeek(json)));
};

export const requestPrevWeek = () => ({
  type: REQUEST_PREV_WEEK,
});
  
export const receivePrevWeek = json => ({
  type: RECEIVE_PREV_WEEK,
  spots: json.spots,
  from: json.from,
  to: json.to,
});

export const fetchPrev = ({ id }) => dispatch => {
  dispatch(requestPrevWeek());
  return fetch(`/api/garage/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receivePrevWeek(json)));
};
