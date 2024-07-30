import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Card from './components/Card';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} /> {/* Setting Homepage as the default route */}
          <Route path='/productspage' element={<ProductPage />} />
          <Route path='product/productdetails/:pid' element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
