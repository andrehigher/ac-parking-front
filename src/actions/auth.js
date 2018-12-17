export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

export const requestAuth = state => ({
  type: REQUEST_AUTH,
  state
});
  
export const receiveAuth = (state, json) => ({
  type: RECEIVE_AUTH,
  state,
  user: json,
});

export const fetchAuth = (state, token) => async dispatch => {
  try {
    const response = await fetch(`http://localhost.parking.avenuecode.com:4000/api/auth/checkToken?token=${token}`);
    console.log('response', response);
    dispatch(receiveAuth(state, response.data));
  } catch(e) {
    console.log('error', e);
    dispatch(receiveAuth(state, { payload: 'Invalid login credentials' }));
  }
};