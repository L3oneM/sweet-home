import React, { useState } from 'react';

import SHOP_DATA from "../../pages/shop/shop.data";

import './directory.styles.scss'

import MenuItem from '../menuItem/MenuItem'

const Directory = () => {
  const [ imageUrl, setImage ] = useState('images/directory/kitchen.jpg')
  const [ sections ] = useState(SHOP_DATA)

  return (
    <div className='directory-container'>
      <div className='directory' >
        {
          sections.map(section => 
            <MenuItem key={section.id} section={section} setImage={setImage} />  
          )
        }
      </div>
      <div className="directory-image" style={{
        transitionDuration: '0.3s',
        backgroundImage: `url(${imageUrl})`
      }} />
    </div>
  );
};

export default Directory;