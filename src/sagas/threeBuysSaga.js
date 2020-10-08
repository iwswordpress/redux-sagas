import { put, take } from 'redux-saga/effects';
import * as actions from '../store/actions';

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

export default watchFirstThreeTodosCreation;
