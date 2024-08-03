import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card2 from './Card2';

const Carousel3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    afterChange: current => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=" bg-primary" style={{ padding: '20px' }}>
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
