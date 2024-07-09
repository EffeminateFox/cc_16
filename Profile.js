//U54529624
// src/Profile.js
import React from 'react';

// Profile component displaying individual team member details
function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// Export Profile as default export
export default Profile; 
