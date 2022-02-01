import React from 'react';
import soa1 from '../../assets/images/soa1.jpeg';

function Team() {
  return (
    <div className="container">
      <div className="our-team">
        <h2 className="pt-3 text-uppercase team-header">
          {' '}
          <b>Our Team</b>
        </h2>

        <div className="mt-4 row">
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Designer</figcaption>
            </figure>
          </div>
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Software Developer</figcaption>
            </figure>
          </div>
          <div className="col-sm-3 text-center">
            <figure className="head-shot ">
              <img className="head-shot-image" src={soa1} alt="headshot" />
              <figcaption className="my-2">Animator</figcaption>
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

export default Team;
