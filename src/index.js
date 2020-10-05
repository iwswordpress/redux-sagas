import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import reducer from './reducers';

const store = createStore(reducer);
const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
