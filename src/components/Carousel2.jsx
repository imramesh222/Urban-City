import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Carousel2 = () => {
  // const [banner,setBanner]=useState([])
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          <div className=" w-100" >

            <img src="./images/daraz3.jpg" alt="" height={'100%'} width={'100%'} />
          </div>
          <div className=" w-100" >
            <img src="./images/daraz2.jpg" alt="" height={'100%'} width={'100%'} />
          </div>
          <div className=" w-100" >
            <img src="./images/daraz1.jpg" alt="" height={'100%'} width={'100%'} />
          </div>


        </Slider>
      </div>
    </>
  )
}

export default Carousel2
