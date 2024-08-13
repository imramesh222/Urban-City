import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleConfirmCheckout = () => {
    // Logic for checkout can go here is
    setShowModal(false);
    alert('Checkout confirmed!');
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Cart Table */}
        <div className="col-lg-8 col-md-12 mb-4">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
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
                  <td>
                    <img src={item.image} alt={item.name} width="100px" height="100px" />
                  </td>
                  <td>{item.name.slice(0, 10)}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.pid, parseInt(e.target.value))}
                      min="1"
                    />
                  </td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => setCart(cart.filter((i) => i.pid !== item.pid))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart History and Checkout */}
        <div className="col-lg-4 col-md-12">
          <div className="card p-3">
            <h4 className="text-center">Cart Summary</h4>
            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            <button className="btn btn-primary btn-block mt-3" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>

          <div className="card mt-4 p-3">
            <h5 className="text-center">Cart History</h5>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <span>{item.name.slice(0, 10)}</span>
                  <span>{item.quantity} x ${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to proceed to checkout?</p>
          <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmCheckout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
