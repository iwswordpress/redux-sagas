import * as actions from './actions';
const initialState = {
  loggedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      console.log('Logging in...set loader...');
      return { ...state };
    case actions.LOGOUT:
      console.log('Logging out...stop loader');
      return { ...state };
    case actions.ASYNC_LOGIN:
      console.log('Logged IN');
      return { ...state, loggedIn: true };
    case actions.ASYNC_LOGOUT:
      console.log('Logged OUT');
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
