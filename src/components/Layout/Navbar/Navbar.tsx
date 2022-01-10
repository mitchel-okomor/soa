import React from 'react';
import Icon from '../../SOAIcon/Icon';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
            <li className='nav-item'>
              <a className='nav-link' href='/mint'>
                Mint NFT
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/collection'>
                Collection
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                Explore NFT
              </a>
            </li>
          </ul>
          <div className='right'>
            <a className='pagebtn' href='/login'>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
