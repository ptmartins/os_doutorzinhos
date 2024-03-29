import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
        <div className="logo"></div>
        <Navigation />
    </header>
  );
}

export default Header;
