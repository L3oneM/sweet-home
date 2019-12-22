import React from 'react';

import CustomButton from '../../components/custom-button/CustumButton'

import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='home-info'>
        <p id='main-header'>New Collection</p>
        <p id='sub-header'>We add beautiful new furniture</p>
        <CustomButton className='custom-button home-btn' >Shop</CustomButton>
      </div>
    </div>
  );
};

export default HomePage;