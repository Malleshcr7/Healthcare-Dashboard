import React from 'react';
import '../styles/Sidebar.css';
import { navLinks } from '../../data/navigation';

// Placeholder for icons, actual icons (e.g., from Lucide React) will be added later.
const IconPlaceholder = ({ name }) => <span style={{ marginRight: '10px', fontStyle: 'italic' }}>{`[${name.split('/').pop().split('.')[0]}]`}</span>;

const Sidebar = () => {
  return (
    <aside className="sidebar-component">
      <h2 className="sidebar-heading">General</h2>
      <nav>
        <ul className="sidebar-nav-list">
          {navLinks.map(link => (
            <li key={link.id} className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link"> {/* Static link for now */}
                <IconPlaceholder name={link.icon} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* You can add other sections here if the sidebar has more than just 'General' nav */}
    </aside>
  );
};

export default Sidebar;
