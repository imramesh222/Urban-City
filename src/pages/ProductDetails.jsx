import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  useEffect(() => {
    const pid = params.product_id;

    axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.product_id]);
  return (
    <>
      {<img src={product.image} alt={product.title} width="100%" />}

    </>
  )
}

export default ProductDetails
