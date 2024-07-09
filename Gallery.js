//U54529624
// src/Gallery.js
import React from 'react';
// Imports Profile component from Profile.js
import Profile from './Profile';

// Gallery component receiving team members data as props
function Gallery({ teamMembers }) {
  // Render a Profile component foreach team member
  return (
    <div className="gallery">
      {teamMembers.map(member => (
        <Profile key={member.id} {...member} />
      ))}
    </div>
  );
}

export default Gallery; // Exports Gallery as default export
