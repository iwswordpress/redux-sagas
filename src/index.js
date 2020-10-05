import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import reducer from './reducers';

// add as per 1.1
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// ...
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });
// end
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
