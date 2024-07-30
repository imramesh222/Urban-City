import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    const pid = parseInt(params.product_id, 10);
    console.log("Product ID from URL:", pid);

    axios
      .get('/products.json')
      .then((res) => {
        console.log("Data fetched from products.json:", res.data);
        const productData = res.data.products.find(product => product.product_id === pid);
        if (productData) {
          console.log("Product found:", productData);
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching products.json:", err);
      });
  }, [params.product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="d-md-flex justify-content-evenly">
        <div className="col-md-4">
          {<img src={product.image} alt={product.name} width="100%" />}
        </div>
        <div className="col-md-6">
          <Link to="/">Home</Link>/<Link to="/products">Products</Link>/
          <span>
            <Link className="text-secondary">{product.name}</Link>
          </span>
          <h2 className="m-0">{product.name}</h2>
          <small className="text-secondary">{product.category}</small>
          <p className="fw-bold my-3">
            <span className="text-success">Price: </span>${product.price}
          </p>
          <p className="fw-bold m-0">Quantity</p>
          <div className="d-flex border rounded w-25">
            <button
              className="btn btn-secondary fw-bold border-0 me-2"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <input
              type="text"
              className="form-control text-center border-0"
              value={quantity}
              readOnly
            />
            <button
              className="btn btn-secondary fw-bold border-0 me-2"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="d-flex justify-content-between my-3">
            <button className="btn btn-warning">
              Add to cart
            </button>
            <button className="btn btn-success">Add to wishlist</button>
          </div>
          <p className="text-secondary m-0">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
