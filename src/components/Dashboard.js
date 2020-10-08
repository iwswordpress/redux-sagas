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
    <button onClick={onIncrementAsync}>BUY STOCK AAA</button>{' '}
    <button onClick={onDecrementAsync}>SELL STOCK AAA</button>{' '}
    <button onClick={onGetUsers}>GET USER DATA</button>{' '}
    <button onClick={onLogIn}>LOGIN</button>{' '}
    <button onClick={onLogOut}>LOGOUT</button>
    <hr />
    <div>
      Stock Qty: {value}{' '}
      {prize && (
        <span style={{ color: 'red' }}>
          STOCK SPLIT BONUS - we add 3 units to your account.
        </span>
      )}
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
