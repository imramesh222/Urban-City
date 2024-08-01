import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import Carousel1 from '../components/Carousel1';
import Carousel2 from '../components/Carousel2';
import Departments from '../components/Departments';
import Card from '../components/Card';

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
    <>
      <div className="p-2" data-aos="fade-right">
        <Carousel2 />
        <div className="d-flex">
          <div className="col-3">
            <Departments />
          </div>
          <div className="col-9">
            <Carousel1 />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h1 className='text-center'>Top Fashions</h1>
        <div className="container d-flex flex-wrap">
          {products.slice(0, 5).map((product, i) => (
            <Card item={product} key={i} />
          ))}
        </div>
        <div className="d-flex justify-content-center my-2">
          <Link to="/productspage"><button className='btn btn-success'>Explore more</button></Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
