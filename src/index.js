import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import Dashboard from './Dashboard';
import counterReducer from './store/counter';
import usersReducer from './store/users';
import authReducer from './store/auth';
// add as per 1.1
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// ...
import rootSaga from './sagas';

const rootReducer = combineReducers({
  counterValue: counterReducer,
  users: usersReducer,
  auth: authReducer
});
const sagaMiddleware = createSagaMiddleware();
//const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });
console.log(store.getState());
// end
function render() {
  ReactDOM.render(
    <div className='container'>
      <Dashboard
        value={store.getState().counterValue.counter}
        prize={store.getState().counterValue.prize}
        users={store.getState().users.users[0]}
        loggedIn={store.getState().auth.loggedIn}
        onDecrementAsync={() => action('DECREMENT_ASYNC')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
        onGetUsers={() => action('GET_USERS_ASYNC')}
        onLogIn={() => action('LOGIN')}
        onLogOut={() => action('LOGOUT')}
      />
    </div>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
