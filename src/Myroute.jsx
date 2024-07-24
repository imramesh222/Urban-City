import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Card from './components/Card';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} /> {/* Setting Homepage as the default route */}
          <Route path='/productspage' element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
