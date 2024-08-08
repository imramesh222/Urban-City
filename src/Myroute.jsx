import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import MoreProductsPage from './pages/MoreProductsPage';
import Cartpage from './pages/Cartpage';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="productspage" element={<ProductPage />} />
          <Route path="product/productdetails/:product_id" element={<ProductDetails />} />
          <Route path="more-from-brand/:brand" element={<MoreProductsPage />} />
          <Route path="/cartpage" element={<Cartpage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
