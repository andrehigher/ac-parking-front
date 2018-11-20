export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export const REQUEST_CHECK_AUTH = 'REQUEST_CHECK_AUTH';
export const RECEIVE_CHECK_AUTH = 'RECEIVE_CHECK_AUTH';

export const requestAuth = state => ({
  type: REQUEST_AUTH,
  state
});
  
export const receiveAuth = (state, json) => ({
  type: RECEIVE_AUTH,
  state,
  auth: json,
});

export const fetchAuth = (state, token) => dispatch => {
  console.log(token);
  const data = new FormData();
  data.append( "token", token );
  dispatch(requestAuth(state));
  return fetch(`http://localhost.parking.avenuecode.com:4000/api/auth/checkToken?token=${token}`)
  .then(response => response.json())
  .then(json => dispatch(receiveAuth(state, json)))
  .catch((e) => {console.log(e)});
};