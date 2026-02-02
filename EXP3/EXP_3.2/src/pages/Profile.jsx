import React from 'react';
import profilePic from './profile.jpeg'; // This imports your image

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Profile</h2>
      <img 
        src={profilePic} 
        alt="Profile" 
        style={{ 
          width: '300px',      /* This makes the width smaller */
          height: 'auto',       /* This keeps the photo from looking stretched */
          borderRadius: '10px', /* Optional: adds nice rounded corners */
          display: 'block',
          marginTop: '10px'
        }} 
      />
      <div style={{ marginTop: '15px' }}>
        <h3>Data Analyst</h3>
        <p>Your description text goes here...</p>
      </div>
    </div>
  );
}

export default Profile;