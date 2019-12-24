import React from 'react';

import CartItemsOverview from '../../components/cart-items-overview/CartItemsOverview'

import './cart.styles.scss'

const Cart = () => {
  return (
    <div className='cart-page-container'>
      <CartItemsOverview />
      <div className='cart-summury'>
        Hello
      </div>
    </div>
  );
};

export default Cart;