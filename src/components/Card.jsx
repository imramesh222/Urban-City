import React from 'react';

const Card = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="row m-4 gap-2">
      <div className="p-2 border rounded" style={{ width: '200px', height: '320px' }}>
        <img src={item.image} alt="Shoe" style={{ color: 'red', width: '100%', height: '50%' }} />
        <h4 className='fs-4'>{item.title.slice(0, 10)}</h4>
        <h5 className='text-success'>$ {item.price}</h5>
        <div className="d-flex justify-content-between">
          <button className='btn btn-primary'>Add to cart</button>
          <button className='btn btn-success'>Details</button>
        </div>
        <hr className='container-fluid' />
        <p className='text-end' style={{ fontSize: '14px', marginBottom: '5px' }}>Last updated at 02/03/2024</p>
      </div>


    </div>
  );
};

export default Card;
