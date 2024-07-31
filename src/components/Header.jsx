import React, { useState } from 'react';
import '../assets/header.css';


const Header = () => {
  const [dropdownContent, setDropdownContent] = useState(null);

  const categories = {
    fashion: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/jacket2.jpg" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>T-shirts</li>
          <li>Jackets</li>
          <li>Jeans</li>
          <li>Shoes</li>
          <li>Tracks</li>
          <li>Jersey</li>
          <li>Garments</li>
          <li>Tops</li>
          <li>Blazers</li>
          <li>T-shirts</li>
          <li>Jackets</li>
          <li>Jeans</li>
          <li>Shoes</li>
          <li>Tracks</li>
          <li>Jersey</li>
          <li>Garments</li>
          <li>Tops</li>
          <li>Blazers</li>
        </ul>
      </div>
    ),
    health: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/lipstick1.jpg" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>Skincare</li>
          <li>Haircare</li>
          <li>Makeup</li>
          <li>Personal Care</li>
          <li>Supplements</li>
        </ul>
      </div>
    ),
    electronics: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/camera2.jpg" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>Mobile Phones</li>
          <li>Laptops</li>
          <li>Cameras</li>
          <li>Televisions</li>
          <li>Accessories</li>
        </ul>
      </div>
    ),
    sports: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/jersey1.png" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>Fitness</li>
          <li>Outdoor</li>
          <li>Team Sports</li>
          <li>Indoor Sports</li>
          <li>Equipment</li>
        </ul>
      </div>
    ),
    home: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/p3.jpg" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>Furniture</li>
          <li>Appliances</li>
          <li>Decor</li>
          <li>Cookware</li>
          <li>Bedding</li>
        </ul>
      </div>
    ),
    books: (
      <div className="d-flex" style={{
        alignItems: 'center'
      }}>
        <img src="./images/camera3.jpg" alt="" style={{ width: '400px', height: '300px', marginRight: '10px', padding: '5px' }} />
        <ul className="list p-2">
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Children's Books</li>
          <li>Educational</li>
          <li>Comics</li>
        </ul>
      </div>
    ),
  };

  const handleMouseEnter = (category) => {
    setDropdownContent(categories[category]);
  };

  const handleMouseLeave = () => {
    setDropdownContent(null);
  };

  return (
    <>
      <div className="container-fluid p-3" >
        <div className=" p-2">
          <div className="row align-items-center justify-content-between col-12">
            <div className="col-12 col-md-4 col-sm-1 d-flex align-items-center mb-2 mb-lg-0">
              <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                <img src="../../images/shoe2.png" alt="" width="100px" height="50px" />
                <h3 className="text-dark px-2">UrbanCart</h3>
              </a>
            </div>

            <div className="col-12 col-md-4 mb-3 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ width: '100%' }}
                />
              </form>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-center justify-content-end">
              <div className="mx-1">
                <h6 className="mb-0">Hello, Sign In</h6>
              </div>
              <div className="text-end pe-4">
                <button type="button" className="btn btn-outline-dark me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Nav */}
      <div className="container" onMouseLeave={handleMouseLeave}>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bold"  >
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('fashion')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Fashions
            </a>
          </li>
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('health')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Health and Beauty
            </a>
          </li>
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('electronics')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Electronics
            </a>
          </li>
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('sports')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Sports
            </a>
          </li>
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('home')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Home and Kitchen
            </a>
          </li>
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('books')}>
            <a href="#" className="nav-link px-2 text-secondary">
              Books
            </a>
          </li>
        </ul>
        {dropdownContent && (
          <div className="dropdown-container" >
            <div className="dropdown-content" data-aos="fade-up">
              {dropdownContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
