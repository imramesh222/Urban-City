import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams(); // Destructure 'pid' directly from useParams

  useEffect(() => {
    axios
      .get(`/path/to/products/${pid}.json`) // Correct the URL to match your API or local file structure
      .then((res) => {
        const productData = res.data;
        setProduct(productData); // Update state with fetched product data
      })
      .catch((err) => console.log(err));
  }, [pid]); // Depend on 'pid' for useEffect

  return (
    <>
      {product.image && (
        <img src={product.image} alt={product.name} width="100%" />
      )}
    </>
  );
};

export default ProductDetails;
