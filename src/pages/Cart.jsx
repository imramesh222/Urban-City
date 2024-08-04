import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.pid === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center col-lg-9 col-md-12 col-sm-12 px-2">
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr className="text-center">
                <th className="align-middle">Image</th>
                <th className="align-middle">Name</th>
                <th className="align-middle">Price</th>
                <th className="align-middle">Quantity</th>
                <th className="align-middle">Total</th>
                <th className="align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.pid}>
                  <td><img src={item.image} alt={item.name} width="100px" height='100px' /></td>
                  <td>{item.name.slice(0, 10)}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type='number'
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.pid, parseInt(e.target.value))}
                      min="1"
                    />
                  </td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => setCart(cart.filter((i) => i.pid !== item.pid))}>Remove</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
