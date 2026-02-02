// src/pages/Profile.jsx
import '../App.css'; // This imports the styles from your App.css
import profilePic from './profile.jpeg'; // Assuming this is how you import the image

function Profile() {
  return (
    <div>
      <h2>My Profile</h2>
      <img src={profilePic} className="profile-img" alt="Profile" style={{ width: '300px', height: 'auto', borderRadius: '8px' }}/>
    </div>
  );
}

export default Profile;