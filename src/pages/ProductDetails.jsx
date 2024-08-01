import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null); // Change from {} to null for better loading state handling
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  useEffect(() => {
    const pid = parseInt(params.product_id, 10); // Ensure correct radix

    if (isNaN(pid)) {
      console.error("Invalid Product ID");
      return;
    }

    axios
      .get(`/products.json`)
      .then((res) => {
        console.log("Product ID:", pid);
        console.log("Response Data:", res.data);

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
    return <p>Loading...</p>; // Loading state while product data is being fetched
  }

  return (
    <>
      <div className="d-flex p-4 bg-secondary">
        <div className="d-flex justify-content-between p-2 bg-success w-100">

          <div className="image" style={{ height: 'calc(100vh - 200px)' }}>
            <img src={`/${product.image}`} alt={product.name} style={{ height: '100%' }} />
          </div>
          <div className=" bg-secondary-emphasis " style={{ marginRight: '200px' }}>
            <h1 className="text-center">{product.name}</h1>


          </div>
        </div>
      </div>
    </>
    // <>


    //   <img src={`/${product.image}`} alt={product.name} />
    //   <h1>{product.name}</h1>
    //   <p>{product.description}</p>
    //   <p>Price: ${product.price}</p>
    //   <p>Category: {product.category}</p>
    //   {/* Render additional product details if available */}
    //   {product.details && (
    //     <div>
    //       <p>Brand: {product.details.brand}</p>
    //       <p>Sizes: {product.details.sizes.join(", ")}</p>
    //       <p>Colors: {product.details.colors.join(", ")}</p>
    //     </div>
    //   )}
    // </>
  );
};

export default ProductDetail;
