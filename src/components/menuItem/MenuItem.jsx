import React, { useState } from 'react';

import './menuItem.styles.scss'

const MenuItem = ({ section, setImage }) => {
  const [isOpen, setOpen] = useState(false)

  const subSections = [] 

  for (let key in section.subSections) {
    subSections.push(key)
  }

  return (
    <div
     className='menu-item'
     onMouseOver={() => setImage(section.imageUrl)}
     onClick={() => setOpen(!isOpen)}
    >
      {
        section.title
      }
      {
        isOpen
        ? 
        <div className='menu-sub-items'>
          {subSections.map((sub => <div key={sub} className='menu-sub-item'>{sub}</div>))}
        </div>
        : null
      }
    </div>
  );
};

export default MenuItem;