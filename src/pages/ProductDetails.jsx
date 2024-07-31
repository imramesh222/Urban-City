import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const ProductDetail = (Product) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  useEffect(() => {
    const pid = parseInt(params.product_id, 10);

    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        console.log("Product ID:", pid);
        console.log("Response Data:", res.data);

        const productData = res.data.products.find(product => product.product_id === pid);
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

  return (
    <>

    </>
  );
};

export default ProductDetail;
