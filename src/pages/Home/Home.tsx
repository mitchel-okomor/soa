import React from 'react';
import SimpleSlider from '../../components/Slider/Slider';
import Icon from '../../components/SOAIcon/Icon';
import Item from '../../components/HomeSLiderItem/Item';
import Mint from '../Mint/Mint';
import { sliderData } from './sliderData';
import Collections from '../Collections/Collections';
import Explore from '../Explore/Explore';
import About from '../About/About';
import MoveToTop from '../../components/MoveToTop/MoveToTop';

function Home() {
  return (
    <main className=' pb-4'>
      <MoveToTop />
      <section id='mint' className='container'>
        <Mint />
      </section>
      {/* <section className='hero-section' id='home'>
        <h1 className='hero-header'>
          Spirits <br /> Of <span className='text-white'>Africa</span>
        </h1>
      </section> */}
      <section className='container email-contact-section'></section>
      <section id='collections'>
        <Collections />
      </section>
      <section className='container slider-section'>
        <div className='row'>
          <div className='col-sm-4 col-xs-12'></div>
          <div className='col-sm-8 col-xs-12'>
            <SimpleSlider Component={Item} data={sliderData} />
          </div>
        </div>
      </section>
      <section className='container home-button'>
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

      <section id='explore' className='container'>
        <Explore />
      </section>
      <section className='my-4' id='about'>
        <About />
      </section>
    </main>
  );
}

export default Home;
