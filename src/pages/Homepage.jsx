import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import Carousel1 from '../components/Carousel1';
import Carousel2 from '../components/Carousel2';
import Departments from '../components/Departments';
import Card from '../components/Card';
import Carousel3 from '../components/Carousel3';

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Aos.init();
    axios
      .get("/products.json")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="d-flex justify-content-center flex-wrap pt-4" data-aos="fade-right">
        <div className="col-md-3 col-lg-2 mb-3">
          <Departments />
        </div>
        <div className="col-md-9 col-lg-9">
          <Carousel2 />
        </div>
      </div>

      <div className="bg-secondary d-flex justify-content-between flex-wrap mt-4">

        <div className="col-md-5 col-lg-6 mb-3">
          <Carousel3 />
        </div>
        <div className="col-md-5 col-lg-6 mb-3">
          <Carousel1 />
        </div>
      </div>


      <h1 className='text-center mb-4 text-uppercase' data-aos="fade-right">Top Fashions</h1>


      <div className="container d-flex flex-wrap ">
        {products.slice(0, 5).map((product, i) => (
          <div className="d-flex flex-wrap" key={i} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Card item={product} />
          </div>
        ))}
      </div>


      <div className="container text-center my-4">
        <Link to="/productspage">
          <button className='btn btn-success'>Explore more</button>
        </Link>

      </div>
    </div>
  );
};

export default Homepage;