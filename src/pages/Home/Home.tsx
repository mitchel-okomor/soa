import React from 'react';
import SimpleSlider from '../../components/Slider/Slider';
import Item from '../../components/HomeSLiderItem/Item';
import Mint from '../Mint/Mint';
import { sliderData } from './sliderData';
import Collections from '../Collections/Collections';
import Explore from '../Explore/Explore';
import About from '../About/About';
import Team from '../Team/Team';
import MoveToTop from '../../components/MoveToTop/ScrollToTop';
import Faq from '../../pages/Faq/Faq';
import Utility from '../Utility/Utility';

function Home() {
  return (
    <main className=" pb-4">
      <MoveToTop />
      <section className="mint" id="mint">
        <div className="container">
          <Mint />
        </div>
      </section>
      {/* <section className='hero-section' id='home'>
        <h1 className='hero-header'>
          Spirits <br /> Of <span className='text-white'>Africa</span>
        </h1>
      </section> */}
      <section id="collections" className="">
        <Collections />
      </section>
      <section className="container slider-section my-5">
        <div className="">
          <SimpleSlider Component={Item} data={sliderData} />
        </div>
      </section>
      <section className="container home-button my-5" id="about">
        <About />
      </section>
      <section id="faq" className="my-5">
        <Faq />
      </section>
      <section id="explore" className="container">
        <Explore />
      </section>
      <section className="container">
        <Utility />
      </section>
      <section className="my-4" id="about">
        <Team />
      </section>
    </main>
  );
}

export default Home;
