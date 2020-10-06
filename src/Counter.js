import React from 'react';
const Counter = ({ value, onDecrementAsync, onGetUsers, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>ASYNC Increment</button>{' '}
    <button onClick={onDecrementAsync}>ASYNC Decrement</button>{' '}
    <button onClick={onGetUsers}>ASYNC GET USERS</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
