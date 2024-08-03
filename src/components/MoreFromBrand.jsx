import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MoreFromBrand = ({ brand }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products.json`)
      .then((res) => {
        const productsData = res.data.products || [];
        const brandProducts = productsData.filter((product) =>
          product.details && product.details.brand === brand
        );
        setProducts(brandProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [brand]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found for this brand.</p>;
  }

  return (
    <div className="mt-5">
      <h2>More from {brand}</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.pid}>
            <div className="card">
              <img src={`/${product.image}`} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/productdetails/${product.pid}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFromBrand;
