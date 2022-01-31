import React from 'react';
import SimpleSlider from '../../components/Slider/Slider';
import Icon from '../../components/SOAIcon/Icon';
import Item from '../../components/HomeSLiderItem/Item';
import Mint from '../Mint/Mint';
import { sliderData } from './sliderData';
import Collections from '../Collections/Collections';
import Explore from '../Explore/Explore';
import About from '../Team/Team';
import MoveToTop from '../../components/MoveToTop/ScrollToTop';
import Faq from '../../pages/Faq/Faq';

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
        <div className="row">
          <h2 className="my-4 about-header">
            {' '}
            <b>ABOUT</b>
          </h2>

          <div className="col-sm-1  ">
            <div className="home-buttom-icon mb-3">
              <Icon />
            </div>
          </div>
          <div className="col-sm-11  goal">
            <p>
              Spirits of Africa is an NFT project inspired by bringing Africa
              closer to the world by showcasing African mythology. SoA was
              started by a small group of Africans want to educate the world
              with stories about Africa mythology.
            </p>
            <h3>
              <b>Goals:</b>
            </h3>
            <p>
              African myth is so interesting but does not get the recognition it
              deserves. Our goal at SoA is to make give the whole world the
              opportunity to enjoy African myth through NFT's. We have so many
              beautiful untold and poorly expressed stories about Africa and
              African myth, that's our inspiration at SoA. We want to be a
              source of hope to the African Community, helping people all over
              the world understand and enjoy Africa by making sure that l the
              world gets to know more about the true African stories, how it
              happened, when it happened and where it happened.
            </p>
            <p>
              <b>SOA</b> is a project for the people and will forever support
              the people of Africa by telling our story through NFT.
            </p>
            <p>
              Come aboard and join us tell these stories and shine the light on
              Africa.
            </p>
          </div>
        </div>
      </section>
      <section id="faq" className="my-5">
        <Faq />
      </section>
      <section id="explore" className="container">
        <Explore />
      </section>
      <section className="my-4" id="about">
        <About />
      </section>
    </main>
  );
}

export default Home;
