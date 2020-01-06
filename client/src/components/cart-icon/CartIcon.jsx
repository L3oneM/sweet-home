import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


import './cart-icon.styles.scss'

const CartIcon = ({ itemCount }) => {
  return (
    <div className='cart-icon'>
      Cart
      {
        itemCount > 0
        ? <span className='item-count'>{itemCount}</span>
        : null
      }
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon);