import React from 'react';
import Slider from 'react-slick';

type SliderProp = {
  Component: any;
  data: any;
};

export default function SimpleSlider({ Component, data }: SliderProp) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {data.map((item: any) => {
        return <Component data={item} key={item.id} />;
      })}
    </Slider>
  );
}
