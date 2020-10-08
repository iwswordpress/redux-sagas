import { put, takeEvery, all, call, select, take } from 'redux-saga/effects';
import * as actions from '../store/actions';

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

function* watchGetUsers() {
  yield takeEvery(actions.GET_USERS_ASYNC, getUsersAsync);
}

export default watchGetUsers;
