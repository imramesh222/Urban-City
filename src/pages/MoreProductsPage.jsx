import React from "react";
import { useParams } from "react-router-dom";
import MoreFromBrand from "../components/MoreFromBrand";

const MoreProductsPage = () => {
  const { brand } = useParams();

  return (
    <div className="container">
      <h1 className="my-4">Products from the Brand: {brand}</h1>
      <MoreFromBrand brand={brand} />
    </div>
  );
};

export default MoreProductsPage;
