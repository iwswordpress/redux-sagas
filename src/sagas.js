import { put, takeEvery, all, call } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log('Hello Sagas!');
  yield console.log(
    'We can set up more functionaility here as this runs on INIT rather than having a watcher.'
  );
}
function getFetchData() {
  // does not need to be a generator function
  fetch('https://randomuser.me/api/?results=1')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => console.log(data));
}

function* incrementAsync() {
  yield delay(2000);
  yield put({ type: 'INCREMENT' });
  try {
    const data = yield call(getFetchData);
    yield put({ type: 'FETCH_SUCCEEDED', data });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
