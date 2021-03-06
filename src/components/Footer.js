import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p>Footer</p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
      <p className="cpyrght">© 2017 - {new Date().getFullYear()} Eric Heredia</p>
    </div>
  )
}

export default Footer;