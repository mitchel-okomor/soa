import React from 'react';
import Slider from 'react-slick';
import Item from '../HomeSLiderItem/Item';

type SliderProp = {
  elementArr: Array<HTMLElement>;
};

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div>
        <Item />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}