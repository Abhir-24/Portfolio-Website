import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeClick = () => setClick(false);

  return (

        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeClick}>
          <img src={logo} className='port-logo' alt="logo"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeClick}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/skills'
              className='nav-links'
              onClick={closeClick}
            >
              Skills
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/experience'
              className='nav-links'
              onClick={closeClick}
            >
              Experience
            </Link>
          </li> 

          <li className='nav-item'>
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeClick}
            >
              Projects
            </Link>
          </li>  

          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeClick}
            >
              Contact Me
            </Link>
          </li>   
          </ul>   
      </nav>
  );
}

export default Navbar;
