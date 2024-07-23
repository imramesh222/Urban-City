import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { Card } from 'react-bootstrap';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/card' element={<Card />} />



      </Routes>
    </Router>
  );
};
export default MyRoute;
