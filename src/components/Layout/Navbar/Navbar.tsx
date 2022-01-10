import React from 'react';
import Icon from '../../SOAIcon/Icon';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light top-navbar'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <Icon />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item '>
              <NavLink className='nav-link' to='/mint'>
                Mint NFT
              </NavLink>
            </li>
            <li className='nav-item mx-2'>
              <NavLink className='nav-link' to='/collection'>
                Collection
              </NavLink>
            </li>
            <li className='nav-item mx-2'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
            <li className='nav-item mx-2'>
              <NavLink className='nav-link' to='/explore'>
                Explore NFT
              </NavLink>
            </li>
          </ul>
          <div className='right mx-4'>
            <Link className='pagebtn' to='/login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
