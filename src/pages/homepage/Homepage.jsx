import React from 'react';
import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/CustumButton'

import './homepage.styles.scss'


const HomePage = ({ history }) => {
  return (
    <div className='homePage'>
      <div className='home-info'>
        <p id='main-header'>New Collection</p>
        <p id='sub-header'>We add beautiful new furniture</p>
        <CustomButton className='custom-button home-btn' onClick={() => history.push('/shop')} >Shop</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(HomePage);