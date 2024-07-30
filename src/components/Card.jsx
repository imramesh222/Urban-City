
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  if (!item) {
    return null;
  }

  return (

    <>
      <div className="m-1 gap-1" style={{ textDecoration: 'none' }} data-aos="fade-up">
        <div className="p-2 border rounded shadow bg-white" style={{ width: '200px', height: '320px' }}>
          <Link to={`/product/productdetails/${item.pid}`}>
            <img src={item.image} alt="Shoe" style={{ color: 'red', width: '100%', height: '50%', cursor: 'default' }} /></Link>
          <h4 className='fs-4'>{item.name.slice(0, 10)}</h4>
          <h5 className='text-success'>$ {item.price}</h5>
          <div className="d-flex justify-content-between">
            <button className='btn btn-primary'>Add to cart</button>
            <button className='btn btn-success'>Details</button>
          </div>
          <hr className='container-fluid' />
          <p className='text-end' style={{ fontSize: '14px', marginBottom: '5px' }}>Last updated at 02/03/2024</p>
        </div>
      </div>
    </>
  );
};

export default Card;
