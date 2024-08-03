import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingStar from '../components/RatingStar'; // Import the RatingStar component
import MoreFromBrand from '../components/MoreFromBrand'; // Import the MoreFromBrand component

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const params = useParams();

  useEffect(() => {
    const pid = parseInt(params.product_id, 10);

    if (isNaN(pid)) {
      console.error("Invalid Product ID");
      return;
    }

    axios
      .get(`/products.json`)
      .then((res) => {
        const productData = res.data.products.find((product) => product.pid === pid);
        if (productData) {
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.product_id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="img-thumbnail mb-4">
            <img src={`/${product.image}`} alt={product.name} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.name}</h1>
          <RatingStar rating={product.rating} /> {/* Use the RatingStar component */}
          <p className="lead">{product.description}</p>
          <p className="h4">Price: ${product.price}</p>
          <p className="h5">Category: {product.category}</p>
          {product.details && (
            <div className="mt-4">
              <p><strong>Brand:</strong> <Link to={`/more-from-brand/${product.details.brand}`}>{product.details.brand}</Link></p>
              {product.details.sizes && (
                <div className="mt-2">
                  <label htmlFor="sizes" className="form-label">Sizes:</label>
                  <select
                    id="sizes"
                    className="form-select"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="">Select size</option>
                    {product.details.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              )}
              {product.details.colors && (
                <div className="mt-2">
                  <label htmlFor="colors" className="form-label">Colors:</label>
                  <select
                    id="colors"
                    className="form-select"
                    value={selectedColor}
                    onChange={handleColorChange}
                  >
                    <option value="">Select color</option>
                    {product.details.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control w-25"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </div>
          <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
        </div>
      </div>
      {product.details && product.details.brand && (
        <MoreFromBrand brand={product.details.brand} /> /* Use the MoreFromBrand component */
      )}
    </div>
  );
};

export default ProductDetail;
