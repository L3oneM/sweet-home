import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import './menuItem.styles.scss'

const MenuItem = ({ section, setImage, match, history }) => {
  const [isOpen, setOpen] = useState(false)

  const { title, imageUrl, subSections } = section

  return (
    <div
     className='menu-item'
     onMouseOver={() => setImage(imageUrl)}
     onClick={() => setOpen(!isOpen)}
    >
      {
        title
      }
      {
        isOpen
        ? 
        <div className='menu-sub-items' >
          {subSections.map((sub =>
            <div
             key={sub.id} className='menu-sub-item'
             onClick={() => history.push(`${match.url}${sub.linkUrl}`)}
            >{sub.title}</div>))}
        </div>
        : null
      }
    </div>
  );
};

export default withRouter(MenuItem);