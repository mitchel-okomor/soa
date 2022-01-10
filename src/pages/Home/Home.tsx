import React from 'react';
import EmailInput from '../../components/EmailInput/EmailInput';
import SimpleSlider from '../../components/Slider/Slider';
import Icon from '../../components/SOAIcon/Icon';

function Home() {
  return (
    <main className='container'>
      <section className='hero-section'>
        <h1 className='hero-header'>
          Mint Your <br /> Own <span className='text-white'>NFT</span>
        </h1>
      </section>
      <section className='email-contact-section'>
        <div className='row'>
          <div className='col-6'>
            <div className='row'>
              <EmailInput />
              <a className='pagebtn-2' href='/contact'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col-6'></div>
        </div>
      </section>
      <section className='slider-section'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-8'>
            <SimpleSlider />
          </div>
        </div>
      </section>
      <section className='home-button'>
        <div className=''>
          <h4>
            <span>
              <div className='home-buttom-icon'>
                <Icon />
              </div>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </h4>
        </div>
      </section>
    </main>
  );
}

export default Home;
