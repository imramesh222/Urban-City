import React from 'react';
import '../assets/departments.css';

const Departments = () => {
  return (
    <div className="departments-container d-flex flex-column p-3 bg-light rounded shadow">
      <div className="categories-header mb-3">
        <h3 className="mb-1">Categories</h3>
        <p className="text-primary see-all">See all</p>
        <hr />
      </div>
      <div className="categories-list">
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input me-2" id="books" />
          <label className="form-check-label" htmlFor="books">Books</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input me-2" id="electronics" />
          <label className="form-check-label" htmlFor="electronics">Electronics</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input me-2" id="cars" />
          <label className="form-check-label" htmlFor="cars">Cars</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input me-2" id="clothes" />
          <label className="form-check-label" htmlFor="clothes">Clothes</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input me-2" id="more-books" />
          <label className="form-check-label" htmlFor="more-books">More Books</label>
        </div>
      </div>
    </div>
  );
}

export default Departments;
