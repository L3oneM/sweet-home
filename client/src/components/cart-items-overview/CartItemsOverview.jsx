import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/CartItem'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'

import './cartItemsOverview.styles.scss'

const CartItemsOverview = ({ cartItems, total }) => {
  return (
    <div className='cart-items-overview'>
      <div className='cart-header'>Cart</div>
      <div className="cart-items-container">
        {
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CartItemsOverview);