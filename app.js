//U54529624
// src/App.js
import React from 'react';
// Imports Header and Footer components from Header.js
import { Header, Footer } from './Header';
// Import Gallery component from Gallery.js
import Gallery from './Gallery';

// Sample team members data
const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Developer', photo: 'john.jpg' },
  { id: 2, name: 'Jane Smith', role: 'Designer', photo: 'jane.jpg' },
  // Add more team members as needed
];

function App() {
  // Root component rendering Header, Gallery, and Footer
  return (
    <div className="App">
      <Header title="Team Members" />
      <Gallery teamMembers={teamMembers} />
      <Footer />
    </div>
  );
}
// Exports App as default export
export default App; 
