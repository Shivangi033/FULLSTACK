import React from 'react';
import profilePic from './profile.jpeg'; // This looks in the same 'pages' folder

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Profile</h2>
      <img 
        src={profilePic} 
        alt="Profile" 
        style={{ 
          width: '300px',      /* This shortens the size */
          height: 'auto',       /* This keeps the proportions correct */
          borderRadius: '10px', /* Optional: adds rounded corners */
          display: 'block',
          marginTop: '10px'
        }} 
      />
    </div>
  );
}

export default Profile;