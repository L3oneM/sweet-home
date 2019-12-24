import React from 'react';

import CartItem from '../cart-item/CartItem'

import './cart-items-overview.styles.scss'

const CartItemsOverview = () => {
  return (
    <div className='cart-items-overview'>
      <div className='cart-header'>Cart</div>
      <div className="cart-items-container">
        {
          <CartItem />
        }
      </div>
    </div>
  );
};

export default CartItemsOverview;