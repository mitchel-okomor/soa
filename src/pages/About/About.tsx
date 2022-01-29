import React from 'react';
import soa1 from '../../assets/images/soa1.jpeg';

function About() {
  return (
    <div className='container-fluid'>
      <div className='our-team'>
        <h3 className='pt-3 text-uppercase text-center'>Our Team</h3>

        <div className='mt-4 row'>
          <div className='col-sm-3 text-center'>
            <div className='head-shot '>
              <img className='head-shot-image' src={soa1} alt='headshot' />
              <h5>Developer</h5>
            </div>
          </div>
          <div className='col-sm-3 text-center'>
            <div className='head-shot'>
              <img className='head-shot-image' src={soa1} alt='headshot' />
              <h5>Developer</h5>
            </div>
          </div>
          <div className='col-sm-3 text-center'>
            {' '}
            <div className='head-shot'>
              {' '}
              <img className='head-shot-image' src={soa1} alt='headshot' />
              <h5>Developer</h5>
            </div>
          </div>
          <div className='col-sm-3 text-center'>
            {' '}
            <div className='head-shot'>
              {' '}
              <img className='head-shot-image' src={soa1} alt='headshot' />
              <h5>Developer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
