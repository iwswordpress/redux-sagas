import { put, takeEvery, all, call, select, take } from 'redux-saga/effects';
import * as actions from '../store/actions';
import watchAndLog from './logSaga';
import watchGetUsers from './userSaga';
import watchLoginLogoutAsync from './authSaga';
import watchIncrementAsync from './counterSaga';
import watchFirstThreeTodosCreation from './threeBuysSaga';

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

// ------------------ WATCHER SAGAS ------------------------------------
// WATCHER sagas. They are like event listenders that listend for every (takeEvery) instance of the actions emitted and the run the 'callback'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// to activate watchers, they must be put in here. If you forget to put
// them here they will not activate.
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(), // in counterSaga
    watchAndLog(), // in logSaga
    watchFirstThreeTodosCreation(), // in threeBuysSaga
    watchLoginLogoutAsync(), // in authSaga
    watchGetUsers() // in userSaga
  ]);
}
