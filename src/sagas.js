import { put, takeEvery, all, call, select, take } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log('Hello Sagas!');
  yield console.log(
    'We can set up more functionaility here as this runs on INIT rather than having a watcher.'
  );
}
async function getFetchData() {
  // does not need to be a generator function
  const result = await fetch('https://randomuser.me/api/?results=3&?nat=gb');
  console.log(result);
  const users = result.json();
  return users;
}
function* incrementAsync() {
  // yield delay(2000);
  yield put({ type: 'INCREMENT' });
}
function* decrementAsync() {
  // yield delay(2000);
  yield put({ type: 'DECREMENT' });
}

function* getUsersAsync() {
  try {
    const data = yield call(getFetchData);
    console.log('data', data);
    yield put({ type: 'FETCH_SUCCEEDED', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  yield takeEvery('DECREMENT_ASYNC', decrementAsync);
  yield takeEvery('GET_USERS_ASYNC', getUsersAsync);
}

function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  }
}

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('INCREMENT_ASYNC');
    // yield take('INCREMENT_ASYNC'); This works too.
  }
  yield put({ type: 'SHOW_CONGRATULATION' });
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchAndLog(),
    watchFirstThreeTodosCreation()
  ]);
}
