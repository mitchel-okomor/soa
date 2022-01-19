import React from 'react';
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <div>
      <div className=' roadmap mt-4'>
        <h2 className='roadmap-header mb-4'>ROADMAP</h2>
        <div className=' mt-3'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-11 roadmap-contents'>
              <h3> our humble beginning</h3>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.{' '}
                <Link to='#'>Contine reading</Link>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-1'></div>

            <div className='col-11 roadmap-contents'>
              <h3> Walking with the spirits</h3>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.{' '}
                <Link to='#'>Contine reading</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
