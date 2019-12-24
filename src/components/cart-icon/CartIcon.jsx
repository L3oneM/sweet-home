import React from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;