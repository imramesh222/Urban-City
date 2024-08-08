import 'aos/dist/aos.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/card.css';
import RatingStar from './RatingStar';

const Card = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="card-container justify-content-center d-flex gap-1 mx-1 border rounded-bottom" data-aos="fade-left">
      <div className="card-content border rounded-bottom shadow bg-white">
        <Link to={`/product/productdetails/${item.pid}`}>
          <img src={item.image} alt={item.name} className="card-img" />
        </Link>
        <div className="card-body p-2">
          <h4 className='card-title fs-6'>{item.name.slice(0, 15)}</h4>
          <RatingStar rating={item.rating} />
          <h5 className='card-price text-success'>$ {item.price}</h5>
        </div>
        <div className="d-flex justify-content-center w-100 border rounded-bottom">
          <Link to={`/product/productdetails/${item.pid}`} className='btn btn-success w-100 rounded-bottom'>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
