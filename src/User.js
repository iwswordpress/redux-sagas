import React from 'react';

const User = ({ username, user }) => {
  console.log(username);
  return (
    <div className='card'>
      <div style={{ color: 'red', fontSize: '26px' }}>{username}</div>
      <div>Email: {user.email}</div>
      <div>City: {user.location.city}</div>
    </div>
  );
};

export default User;
