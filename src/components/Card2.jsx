import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../assets/card2.css'; 

const Card2 = ({ item }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!item) {
    return null;
  }

  return (
    <div className="card2-container  gap-1" data-aos="fade-up">
      <div className="card2-content p-2 border rounded shadow bg-white">
        <Link to={`/product/productdetails/${item.pid}`} className="card2-link">
          <img src={item.image} alt="Shoe" className="card2-img" />
          <h4 className="card2-title fs-6 text-center mt-2">{item.name.slice(0, 10)}</h4>
          <h5 className="card2-price text-success text-center">${item.price}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
