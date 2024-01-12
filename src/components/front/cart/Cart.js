import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Cart - Items</div>

      <div className='clear-cart'>
        {cartItems.length >=1 && (  <button className='clear-cart-button' onClick={() => handleCartClearance()}>Clear Cart</button> ) }
      </div>

      {cartItems.length === 0 && <div className='cart-items-empty'> Your Cart Is Empty </div>}

      <div className='cart-items-box'>
        {
          cartItems.map((item) => (
            <div key={item.id} className='cart-items-list'>
              <img className='cart-item-image' src={item.image} alt={item.name} />
              <div className='cart-items-name'> <h3>{item.name}</h3> </div>

              <div className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                <div className='item-quantity'>{item.quantity}</div>
                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
              </div>

              <div className='cart-items-price'>₹ {item.price} /-</div>
            </div>

          ))
        }
        

      </div>

      <div className='cart-items-total-price-name'>
        Total price
        <div className='cart-items-total-price'>₹ {totalPrice} /-</div>
      </div>
      <Link to='/'><button className='back-to-shop'>Back To Shop</button></Link>

    </div>
  );
};

export default Cart;
