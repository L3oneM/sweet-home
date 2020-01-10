import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,isCheckout, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in': ''  } ${isCheckout ? 'checkout-btn' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;