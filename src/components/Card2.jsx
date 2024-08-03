import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Card2 = ({ item }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!item) {
    return null;
  }

  return (
    <div className="m-1 gap-1" style={{ textDecoration: 'none', cursor: 'pointer' }} data-aos="fade-up">
      <div className="p-2 border rounded shadow bg-white" style={{ width: '200px', height: '250px' }}>
        <Link to={`/product/productdetails/${item.pid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={item.image} alt="Shoe" style={{ width: '100%', height: '70%' }} />
          <h4 className="fs-6 text-center mt-2">{item.name.slice(0, 10)}</h4>
          <h5 className="text-success text-center">${item.price}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
