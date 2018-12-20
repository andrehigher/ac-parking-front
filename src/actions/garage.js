import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK
} from '../constants/garage';

export const requestCurrentWeek = () => ({
  type: REQUEST_CURRENT_WEEK,
});
  
export const receiveCurrentWeek = (state, json) => ({
  type: RECEIVE_CURRENT_WEEK,
  state,
  spots: json,
});

export const fetchCurrent = state => async dispatch => {
  dispatch(requestCurrentWeek());
    console.log('fetching...');
    const response = await fetch(`http://localhost.parking.avenuecode.com:4000/api/garage/current`);
    const json = await response.json();
    console.log(json);
    // .then(data => {
    //   console.log(data);
    //   dispatch(receiveCurrentWeek(state, data));
    // }).catch(e => {
    // console.log('error', e);
    // dispatch(receiveCurrentWeek({}, { error: 'Invalid login credentials' }));
};
