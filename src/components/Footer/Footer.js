import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
          <p className="copyright">&copy; 2016 - Centro de Estudos 'Os Doutorzinhos'</p>
          <p className="developedBy">Developed with <span className='footer-heart'>&hearts;</span> by <a href="https://pedromartins.com.pt">Pedro Martins</a></p>
      </footer>
  );
}

export default Footer;
