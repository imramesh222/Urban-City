import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import Card from './Card';

const Carousel1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []); // Dependency array to prevent infinite loop

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container my-4 ">
      <Slider {...settings}>
        {products.slice(10, 20).map((product, i) => (
          <div className="bg-danger col px-2" key={i}>
            <Card item={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel1;
