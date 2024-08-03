import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';

import Card2 from './Card2';

const Carousel1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
      <div className="px-4  my-4 " data-aos="fade-left">
        <h3 className='text-center text-dark pt-2 fw-bold text-uppercase'>Highlights of the day</h3>
        <div className="bg-danger">

          <Slider {...settings}>
            {products.slice(10, 20).map((product, i) => (
              <div className="d-flex justify-content-between" key={i}>
                <Card2 item={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel1;
