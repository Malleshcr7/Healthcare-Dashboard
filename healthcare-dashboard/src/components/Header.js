import React from 'react';
import '../styles/Header.css'; // Assuming styles are in src/styles

// Consider importing an actual icon library later, e.g., for the bell icon
// import { Bell } from 'lucide-react'; // Example

const Header = () => {
  return (
    <header className="header-component">
      <div className="header-logo">Healthcare.</div>
      <div className="header-search-container">
        <input type="text" className="header-search" placeholder="Search..." />
        {/* Placeholder for search icon if needed */}
      </div>
      <div className="header-actions">
        <button className="header-add-button">+ Add</button>
        <div className="header-notification-icon">
          {/* <Bell size={24} /> */} {/* Placeholder for actual icon */}
          <span>🔔</span> {/* Temporary bell emoji */}
        </div>
        <div className="header-user-profile">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="user-avatar" />
          <span className="user-name">User Name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
