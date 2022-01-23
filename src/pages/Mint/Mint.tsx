import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

function Mint() {
  return (
    <div className='row spirits'>
      <div className='col-sm-8'>
        <div className='spirit-intro'>
          spirits of
        </div>
		<div className='spirit-intro2'>africa</div>
        <div className='mt-3'>
          <a href='/#' target='_blank'>
            <FiInstagram
              style={{ fontSize: '3rem', color: 'var(--primary-color)' }}
            />
          </a>
          <a href='/#' target='_blank'>
            {' '}
            <FiTwitter
              style={{
                fontSize: '3rem',
                color: 'var(--primary-color)',
                marginLeft: '1rem'
              }}
            />
          </a>
          <a href='/#' target='_blank'>
            <FiFacebook
              style={{
                fontSize: '3rem',
                color: 'var(--primary-color)',
                marginLeft: '0.3rem'
              }}
            />
          </a>
        </div>
      </div>
      <div className='col-sm-4'></div>
    </div>
  );
}

export default Mint;
