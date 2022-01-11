import React from 'react';
import { Link } from 'react-router-dom';

function Item(data: any) {
  return (
    <Link to={data.data.url}>
      <div className='home-slider-item '>
        <img width={'150'} src={data.data.image} alt='nft' />
      </div>
    </Link>
  );
}

export default Item;
