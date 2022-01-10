import React from 'react';
import { Link } from 'react-router-dom';

function Item() {
  return (
    <Link to={'#'}>
      <div className='home-slider-item'>
        <img src='/jjnd' alt='nft' />
      </div>
    </Link>
  );
}

export default Item;
