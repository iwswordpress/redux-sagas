import React from 'react';
const Counter = ({ value, onDecrementAsync, onGetUsers, onIncrementAsync }) => (
  <div>
    <button onClick={onDecrementAsync}>ASYNC Increment</button>{' '}
    <button onClick={onIncrementAsync}>ASYNC Decrement</button>{' '}
    <button onClick={onGetUsers}>ASYNC GET USERS</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
