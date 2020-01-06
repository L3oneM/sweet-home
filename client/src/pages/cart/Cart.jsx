import React from 'react';

import CartItemsOverview from '../../components/cart-items-overview/CartItemsOverview'
import CartSummary from '../../components/cart-summary/CartSummary'

import './cart.styles.scss'

const Cart = () => {
  return (
    <div className='cart-page-container'>
      <CartItemsOverview />
      <CartSummary />
    </div>
  );
};

export default Cart;