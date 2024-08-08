import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-dark pt-4" >
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-md-4 mb-4">
            <h5>About Us</h5>
            <p>UrbanCart is your go-to online store for the latest in fashion footwear. Our mission is to provide you with the trendiest shoes at unbeatable prices.</p>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li>
                <Link to="/card" className="text-dark text-decoration-none">Shop</Link>
              </li>
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/help" className="text-dark text-decoration-none">Help & Support</a></li>
              <li><a href="/returns" className="text-dark text-decoration-none">Returns</a></li>
              <li><a href="/shipping" className="text-dark text-decoration-none">Shipping</a></li>
              <li><a href="/faqs" className="text-dark text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark text-decoration-none me-3"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-secondary text-center py-3 mt-4">
        <div className="container">
          <small>&copy; 2024 UrbanCart. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
