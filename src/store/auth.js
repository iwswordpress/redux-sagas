import * as actions from './actions';
const initialState = {
  loggedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      console.log('[auth.js]: - heard LOGIN');
      return { ...state };
    case actions.LOGOUT:
      console.log('[auth.js]:  - heard LOGOUT');
      return { ...state };
    case actions.LOGIN_SUCCESS:
      console.log('[auth.js]: LOGIN_SUCCESS');
      return { ...state, loggedIn: true };
    case actions.LOGOUT_SUCCESS:
      console.log('[auth.js]: LOGOUT_SUCCESS');
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
