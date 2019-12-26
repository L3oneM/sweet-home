import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/CustumButton'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_rz9nvbQXUVGNoBZvoRSZfHnI00tC1C3qNx';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
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

export default StripeButton;