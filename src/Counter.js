/*eslint-disable no-unused-vars */
import React from 'react';
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{' '}
    <button onClick={onDecrement}>Decrement</button>{' '}
    <button onClick={onIncrementAsync}>Increment after 0.5 second</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
