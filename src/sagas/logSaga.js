import { select, take } from 'redux-saga/effects';
// LOGGER
function* watchAndLog() {
  while (true) {
    const action = yield take('*'); // listend for all actions
    const state = yield select(); // get state

    console.log('action', action);
    console.log('state after', state);
  }
}

export default watchAndLog;
