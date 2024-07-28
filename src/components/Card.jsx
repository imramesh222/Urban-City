import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  if (!item) {
    return null;
  }
  return (

    <div className="m-2 gap-1" style={{ textDecoration: 'none' }}>
      <div className="p-2 border rounded" style={{ width: '200px', height: '320px' }}>
        <Link to={`/product/productdetails/${item.id}`}>
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
  );
};

export default Card;
