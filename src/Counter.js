import React from 'react';
const Counter = ({ value, onDecrementAsync, onGetUsers, onIncrementAsync }) => (
  <div>
    <button onClick={onDecrementAsync}>Increment</button>{' '}
    <button onClick={onIncrementAsync}>Decrement</button>{' '}
    <button onClick={onGetUsers}>GET USERS</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
