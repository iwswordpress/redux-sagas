import * as actions from './actions';
const initialState = {
  loggedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggedIn: true };
    case actions.LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
