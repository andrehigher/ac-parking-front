import {
  REQUEST_CURRENT_WEEK,
  RECEIVE_CURRENT_WEEK
} from '../constants/garage';


// export const requestCurrentWeek = state => ({
//   type: REQUEST_CURRENT_WEEK,
//   state
// });
  
// export const receiveCurrentWeek = (state, json) => ({
//   type: RECEIVE_CURRENT_WEEK,
//   state,
//   user: json,
// });

// export const fetchCurrent = (state, token) => async dispatch => {
//   try {
//     const response = await fetch(`http://localhost.parking.avenuecode.com:4000/api/garage/current`);
//     console.log('response', response);
//     dispatch(receiveCurrentWeek(state, response.data));
//   } catch(e) {
//     console.log('error', e);
//     dispatch(receiveCurrentWeek(state, { payload: 'Invalid login credentials' }));
//   }
// }
