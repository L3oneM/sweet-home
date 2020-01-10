import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import StripeButton from '../../components/stripe-button/StripeButton'

import { selectCartTotal, selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cartSummary.styles.scss'


const CartSummary = ({ TotalCartItems, total }) => {
  return (
    <div className='cart-summary-container'>
      <div className="header">
        CART SUMMARY
      </div>
      <div className="total-items">
        <span>Total: </span> {TotalCartItems} item(s)
      </div>
      <div className="price">
        <span>
          ${total}
        </span>
         Delivery Free
      </div>
      <StripeButton price={total} />
      <div className="payments">
        Accepted payment methods:
        <br />
        <img src="./images/cart-item/visa.png" alt="visa"/>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  TotalCartItems: selectCartItemsCount,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CartSummary);