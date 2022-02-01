import React from 'react';
import soa1 from '../../assets/images/soa1.jpeg';
import LazyLoad from 'react-lazyload';
import Spinner from '../../components/Spinner/Spinner';

function Team() {
  return (
    <div className="container">
      <div className="our-team">
        <h2 className="pt-3 text-uppercase team-header">
          <b>Our Team</b>
        </h2>

        <div className="mt-4 row">
          <div data-aos="zoom-in-right" className="col-sm-3 text-center">
            <figure className="head-shot ">
              <LazyLoad
                height={100}
                offset={[-100, 100]}
                placeholder={<Spinner />}
              >
                <img className="head-shot-image" src={soa1} alt="headshot" />
              </LazyLoad>
              <figcaption className="my-2 text-uppercase">
                Peter Ewulum
              </figcaption>
              <p className="">
                Peter is the team lead for this project, with 8 years of
                experience in Graphic Design, Digital Illustration, and
                Photography.
              </p>
            </figure>
          </div>
          <div data-aos="zoom-in-left" className="col-sm-3 text-center">
            <figure className="head-shot ">
              <LazyLoad
                height={100}
                offset={[-100, 100]}
                placeholder={<Spinner />}
              >
                <img className="head-shot-image" src={soa1} alt="headshot" />
              </LazyLoad>{' '}
              <figcaption className="my-2 text-uppercase">John Bull</figcaption>
              <p className="text-uppercase">Software Developer</p>{' '}
            </figure>
          </div>
          <div data-aos="zoom-in-right" className="col-sm-3 text-center">
            <figure className="head-shot ">
              <LazyLoad
                height={100}
                offset={[-100, 100]}
                placeholder={<Spinner />}
              >
                <img className="head-shot-image" src={soa1} alt="headshot" />
              </LazyLoad>
              <figcaption className="my-2 text-uppercase">John Bull</figcaption>
              <p className="text-uppercase">Animator</p>
            </figure>
          </div>
          <div data-aos="zoom-in-left" className="col-sm-3 text-center">
            <figure className="head-shot ">
              <LazyLoad
                height={100}
                offset={[-100, 100]}
                placeholder={<Spinner />}
              >
                <img className="head-shot-image" src={soa1} alt="headshot" />
              </LazyLoad>{' '}
              <figcaption className="my-2 text-uppercase">John Bull</figcaption>
              <p className="text-uppercase">Project Manager</p>{' '}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
