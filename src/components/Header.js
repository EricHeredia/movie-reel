import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <ul className="nav-bar">
        <li className="logo"><img src="images/logo.png" alt="Company Logo" /></li>
        <li><a href="top">DISCOVER</a></li>
        <li><a href="top">MOVIES</a></li>
        <li><a href="top">TV SHOWS</a></li>
      </ul>
    </div>
  )
}

export default Header;