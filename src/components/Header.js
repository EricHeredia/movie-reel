import React from 'react';
import './Header.scss';

const Header = ({ sendLink }) => {
  return (
    <div>
      <ul className="nav-bar">
        <li className="logo"><img src="images/logo.png" alt="Company Logo" /></li>
        <li className="nav-link"><a href="#" onClick={sendLink()}>DISCOVER</a></li>
        <li className="nav-link"><a href="top">MOVIES</a></li>
        <li className="nav-link"><a href="top">TV SHOWS</a></li>
        <li className="nav-link"><a href="top">PEOPLE</a></li>
      </ul>
    </div>
  )
}

export default Header;