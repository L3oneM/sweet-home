import React, { useState } from 'react';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss'

import MenuItem from '../menu-item/MenuItem'

const Directory = ({ sections }) => {
  const [ imageUrl, setImage ] = useState('images/directory/kitchen.jpg')

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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory);