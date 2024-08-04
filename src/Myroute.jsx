import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import MoreProductsPage from './pages/MoreProductsPage';
import Cart from './pages/Cart';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} /> {/* Setting Homepage as the default route */}
          <Route path="productspage" element={<ProductPage />} />
          <Route path="product/productdetails/:product_id" element={<ProductDetails />} />
          <Route path="more-from-brand/:brand" element={<MoreProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
