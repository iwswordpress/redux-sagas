import React from 'react';
import User from './User';
const Dashboard = ({
  value,
  users,
  onDecrementAsync,
  onGetUsers,
  onIncrementAsync,
  prize,
  onLogIn,
  onLogOut,
  loggedIn
}) => (
  <div>
    <button onClick={onIncrementAsync}>ASYNC Increment</button>{' '}
    <button onClick={onDecrementAsync}>ASYNC Decrement</button>{' '}
    <button onClick={onGetUsers}>ASYNC GET USERS</button>{' '}
    <button onClick={onLogIn}>LOGIN</button>{' '}
    <button onClick={onLogOut}>LOGOUT</button>
    <hr />
    <div>
      Clicked: {value} times{' '}
      {prize && <span style={{ color: 'red' }}>PRIZE</span>}
    </div>
    <div>
      AuthStatus:{' '}
      <span className={loggedIn ? 'auth' : 'not-auth'}>
        {loggedIn ? 'LoggedIn' : 'LoggedOut'}
      </span>
      <br />
      Users:
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {users.map(user => (
        <User username={user.name.first} user={user} key={Math.random()} />
      ))}
    </div>
    <div />
  </div>
);

export default Dashboard;
