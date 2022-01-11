import React from 'react';
import EmailInput from '../../components/EmailInput/EmailInput';
import SimpleSlider from '../../components/Slider/Slider';
import Icon from '../../components/SOAIcon/Icon';
import Item from '../../components/HomeSLiderItem/Item';
import { sliderData } from './sliderData';

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
          <div className='col-sm-4 col-xs-12'></div>
          <div className='col-sm-8 col-xs-12'>
            <SimpleSlider Component={Item} data={sliderData} />
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
