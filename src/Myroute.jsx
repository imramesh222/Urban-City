import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Card from './components/Card';  // Ensure this is correctly imported

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="card" element={<Card />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
