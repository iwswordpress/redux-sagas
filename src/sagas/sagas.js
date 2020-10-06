import { put, takeEvery, all, call, select, take } from 'redux-saga/effects';
import * as actions from '../store/actions';
const delay = ms => new Promise(res => setTimeout(res, ms));

// This fires on start as this saga is in watch list below in yield all
export function* helloSaga() {
  yield console.log('Hello Sagas!');
  yield console.log(
    'We can set up more functionaility here as this runs on INIT rather than having a watcher.'
  );
}

// These are WORKER sagas that are called by WATCHER sagas
async function getFetchData() {
  // does not need to be a generator function
  const result = await fetch(
    'https://randomuser.me/api/?results=3&?nat=gb&inc=name,email, location'
  );
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
    console.log('data', data.results);
    yield put({ type: 'FETCH_SUCCEEDED', payload: data.results });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

function* logInAsync() {
  yield put({ type: actions.ASYNC_LOGIN });
}

function* logOutAsync() {
  yield put({ type: actions.ASYNC_LOGOUT });
}

// WATCHER sagas. They are like event listenders that listend for every (takeEvery) instance of the actions emitted and the run the 'callback'
function* watchIncrementAsync() {
  yield takeEvery(actions.INCREMENT_ASYNC, incrementAsync);
  yield takeEvery(actions.DECREMENT_ASYNC, decrementAsync);
  yield takeEvery(actions.GET_USERS_ASYNC, getUsersAsync);
}
function* watchLoginLogoutAsync() {
  yield takeEvery(actions.LOGIN, logInAsync);
  yield takeEvery(actions.LOGOUT, logOutAsync);
}
function* watchAndLog() {
  while (true) {
    const action = yield take('*'); // listend for all actions
    const state = yield select(); // get state

    console.log('action', action);
    console.log('state after', state);
  }
}
// once three INCREMENT_ASYNC occur, this watcher will fire the
// SHOW_CONGRATUTLATIOINS.
// It is run just onec not every three INCREMENT_ASYNC
function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take(actions.INCREMENT_ASYNC);
    // yield take('INCREMENT_ASYNC'); This works too.
  }
  yield put({ type: actions.SHOW_CONGRATULATION });
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// to activate watchers, tehy must be put in here. If you forget to put
// them here they will not activate.
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchAndLog(),
    watchFirstThreeTodosCreation(),
    watchLoginLogoutAsync()
  ]);
}
