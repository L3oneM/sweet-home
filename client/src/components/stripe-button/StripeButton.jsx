import React from 'react';
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { clearCart } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/CustumButton'

const StripeButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_rz9nvbQXUVGNoBZvoRSZfHnI00tC1C3qNx';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful!')
      clearCart()
    }).catch(error => {
      console.log('Payment error: ', error)
      alert('There was an issue with your payment.')
    })
  };

  return (
    <StripeCheckout
    label='Checkout'
    name='Sweet Home Ltd.'
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    >
      <CustomButton isCheckout>
        Checkout
      </CustomButton>
    </StripeCheckout>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeButton);