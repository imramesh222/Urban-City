
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card2 = ({ item }) => {
  if (!item) {
    return null;
  }

  return (

    <>
      <div className="m-1 gap-1" style={{ textDecoration: 'none', cursor: 'pointer' }} data-aos="fade-up">
        <div className="p-2 border rounded shadow bg-white" style={{ width: '200px', height: '200px' }}>
          <Link to={`/product/productdetails/${item.pid}`}>
            <img src={item.image} alt="Shoe" style={{ color: 'red', width: '100%', height: '70%' }} /></Link>
          <h4 className='fs-4 text-center bg-danger'>{item.name.slice(0, 10)}</h4>
          <h5 className='text-success bg-danger text-center'>$ {item.price}</h5>

        </div>
      </div>
    </>
  );
};

export default Card2;
