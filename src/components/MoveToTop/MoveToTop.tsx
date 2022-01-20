import React from 'react';

function MoveToTop() {
  return (
    <a href='/#mint'>
      <div className='move-to-top' style={{ cursor: 'pointer' }}>
        <i className='fa fa-angle-up' style={{ fontSize: '2rem' }}></i>
      </div>
    </a>
  );
}

export default MoveToTop;
