import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../store/actions';

// ----------------------- WORKER SAGAS ------------------------------------
// These are WORKER sagas that are called by WATCHER sagas

// COUNTER
function* incrementAsync() {
  // yield delay(2000);
  yield put({ type: 'INCREMENT' });
}
function* decrementAsync() {
  // yield delay(2000);
  yield put({ type: 'DECREMENT' });
}
function* watchIncrementAsync() {
  yield takeEvery(actions.INCREMENT_ASYNC, incrementAsync);
  yield takeEvery(actions.DECREMENT_ASYNC, decrementAsync);
}

export default watchIncrementAsync;
