import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import Aos from 'aos';
import Card2 from './Card2';

const Carousel1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Aos.init();
    axios
      .get("../products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);


  const settings = {
    dots: false,
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
          centerPadding: '0px',
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className=" px-4" data-aos="fade-left">
        <h3 className='text-center text-dark  fw-bold text-uppercase' data-aos="fade-left">Highlights of the day</h3>
        <Slider {...settings}>
          {products.slice(10, 20).map((product, i) => (
            <div className="d-flex justify-content-center" key={i}>
              <Card2 item={product} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel1;
