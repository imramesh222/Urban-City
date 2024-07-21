import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};
export default MyRoute;
