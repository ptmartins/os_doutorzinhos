import React from 'react';
import {Link} from 'gatsby';
import './Navigation.css';

function Navigation() {
  return (
      <nav className="navigation">
          <Link to='/' className='navigation-link'>Inicio</Link>
          <Link to='/' className='navigation-link'>Sobre nos</Link>
          <Link to='/' className='navigation-link'>Servicos</Link>
          <Link to='/' className='navigation-link'>Equipa</Link>
          <Link to='/' className='navigation-link'>Contactos</Link>
      </nav>
  );
}

export default Navigation;
