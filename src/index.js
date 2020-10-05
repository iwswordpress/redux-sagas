import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import './index.css';
import Counter from './Counter';
import reducer from './reducers';

const store = createStore(reducer);
const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <div className='container'>
      <Counter
        value={store.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />
    </div>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
