import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/roadmap.jpg';

function Explore() {
  return (
    <div>
      <div className=' roadmap'>
        <img width={'20%'} src={image} alt='mint' />
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
