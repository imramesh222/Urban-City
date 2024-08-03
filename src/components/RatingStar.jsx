// src/components/RatingStar.jsx
import React from 'react';

const RatingStar = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-warning">★</span>);
    } else {
      stars.push(<span key={i} className="text-secondary">★</span>);
    }
  }

  return <div>{stars}</div>;
};

export default RatingStar;
