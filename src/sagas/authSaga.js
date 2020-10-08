import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../store/actions';

// LOGIN/LOGOUT
function* logInAsync() {
  console.log('[saga.js]: logInAsync - heard LOGIN');
  try {
    yield put({ type: actions.LOGIN_SUCCESS });
  } catch {
    yield put({ type: actions.LOGIN_ERROR });
  }
}

function* logOutAsync() {
  console.log('[saga.js]: logOutAsync  - heard LOGOUT');
  yield put({ type: actions.LOGOUT_SUCCESS });
}

function* watchLoginLogoutAsync() {
  yield takeEvery(actions.LOGIN, logInAsync);
  yield takeEvery(actions.LOGOUT, logOutAsync);
}

export default watchLoginLogoutAsync;
