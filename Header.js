//U54529624
// src/Header.js
import React from 'react';

// Header componentfor page title
export function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Footer component displaying the footers text
export function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Your Company</p>
    </footer>
  );
}
