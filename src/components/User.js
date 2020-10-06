import React from 'react';

const User = ({ username, user }) => {
  console.log(username);
  return (
    <div className='card'>
      <div style={{ color: 'red', fontSize: '26px' }}>
        {user.name.first} {user.name.last}{' '}
      </div>
      <div>Email: {user.email}</div>
      <div>
        {user.location.city}, {user.location.country}{' '}
      </div>
      <div>
        Lat: {user.location.coordinates.latitude} Lon:{' '}
        {user.location.coordinates.latitude}
      </div>
      <p style={{ fontSize: '10px' }}>
        We will use another API to get weather data...
      </p>
    </div>
  );
};

export default User;
