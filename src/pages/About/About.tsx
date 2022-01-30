import React from 'react';
import soa1 from '../../assets/images/soa1.jpeg';

function About() {
  return (
    <div className="container">
      <div className="our-team">
        <h3 className="pt-3 text-uppercase text-center">Our Team</h3>

        <div className="mt-4 row">
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Developer</figcaption>
            </figure>
          </div>
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Developer</figcaption>
            </figure>
          </div>
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Developer</figcaption>
            </figure>
          </div>
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2"> Developer</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
