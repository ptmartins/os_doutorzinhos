import React from 'react';
import './Footer.css';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-innerWrapper">
          <p className="footer-copyright">&copy; 2016 - Centro de Estudos 'Os Doutorzinhos'. Developed with <span className='footer-heart'>&hearts;</span> by <a href="https://pedromartins.com.pt">Pedro Martins</a></p>
            <div class="footer-social">
              <Link to="https://gmail.com" className='footer-social-link'>
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </Link>
              
              <FontAwesomeIcon icon={faLinkedin} size="2x" className='footer-social-link' />
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" className='footer-social-link' />
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" className='footer-social-link' />
            </div>
        </div>
      </footer>
  );
}

export default Footer;
