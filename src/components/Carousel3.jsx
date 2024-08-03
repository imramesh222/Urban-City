import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card2 from './Card2';
import Aos from 'aos';
const Carousel3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Aos.init();
    axios
      .get("../products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    afterChange: current => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 5,
          infinite: true,
          dots: false,
        },
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          initialSlide: 1
        },
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container" >
      <h3 className='text-center text-dark  fw-bold text-uppercase' data-aos="fade-right">New arrivals</h3>
      <Slider {...settings}>
        {products.map((product, i) => (
          <div className="d-flex justify-content-between " key={i}>
            <Card2 item={product} />
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default Carousel3;
