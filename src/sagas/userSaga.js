import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../store/actions';

// USERS
async function getFetchData() {
  // does not need to be a generator function

  // 1. Login.
  // 2. Get User profile.
  // 3. Get Github repo info for user.
  // 4. Get Weather for locatiion.
  // 5. Get Random Number and if > x BUY AAA.
  // 1 and 2 must be sequential - must login before getting profile.
  // 3,4,5 can be race or forks (each a separate process).

  const result = await fetch(
    'https://randomuser.me/api/?results=1&inc=name,email,location&nat=us,dk,fr,gb'
  );
  //console.log(result);
  const users = result.json();
  return users;
}

function* getUsersAsync() {
  try {
    const data = yield call(getFetchData);
    //console.log('data', data.results);
    yield put({ type: 'FETCH_SUCCEEDED', payload: data.results });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

function* watchGetUsers() {
  yield takeEvery(actions.GET_USERS_ASYNC, getUsersAsync);
}

export default watchGetUsers;
