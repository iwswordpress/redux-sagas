import { put, takeEvery, all, call, select, take } from 'redux-saga/effects';
import * as actions from '../store/actions';
import watchAndLog from './logSaga';

// As per docs there is a delay helper in redux-saga/effects but it seems it is not exported when included hence a util function here
const delay = ms => new Promise(res => setTimeout(res, ms));

// This fires on start as this saga is in watch list below in yield all
export function* helloSaga() {
  yield delay(2000); // 2 sec delay
  yield console.log('Hello Sagas!');
  yield delay(2000); // 2 sec delay
  yield console.log(
    'We can set up more functionaility here as this runs on INIT rather than having a watcher.'
  );
}
// ----------------------- WORKER SAGAS ------------------------------------
// These are WORKER sagas that are called by WATCHER sagas

// USERS
async function getFetchData() {
  // does not need to be a generator function
  const result = await fetch(
    'https://randomuser.me/api/?results=3&inc=name,email,location&nat=us,dk,fr,gb'
  );
  console.log(result);
  const users = result.json();
  return users;
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
// COUNTER
function* incrementAsync() {
  // yield delay(2000);
  yield put({ type: 'INCREMENT' });
}
function* decrementAsync() {
  // yield delay(2000);
  yield put({ type: 'DECREMENT' });
}

// ------------------ WATCHER SAGAS ------------------------------------
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

// STOCK SPLIT
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
// to activate watchers, they must be put in here. If you forget to put
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
