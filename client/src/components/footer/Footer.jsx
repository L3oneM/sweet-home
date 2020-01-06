import React from 'react';

import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="follow">
        <span>Follow us:</span>
        <a
         href="https://www.facebook.com/"
         target="_blank"
         rel="noopener noreferrer">
          <img src="/images/footer/facebook.png" alt="facebook"/>
        </a>
        <a
         href="https://www.pinterest.com/"
         target="_blank"
         rel="noopener noreferrer">
          <img src="/images/footer/pinterest.png" alt="pinterest"/>
        </a>
        <a
         href="https://twitter.com/"
         target="_blank"
         rel="noopener noreferrer">
          <img src="/images/footer/twitter.png" alt="twitter"/>
        </a>   
      </div>
      <div className="copy">
        Sweet Home Furniture Stores, Copyright &copy; 2020
      </div>
    </footer>
  );
};

export default Footer;