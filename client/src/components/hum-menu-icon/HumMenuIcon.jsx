import React from 'react';

import './humMenuIcon.scss'

const MenuIcon = ({ isActive, setActive }) => {

  return (
    <div className="menu-btn">
      <button
       className={`hamburger hamburger--elastic ${ isActive ? 'is-active' : '' }`}
       type="button"
       onClick={() => setActive(!isActive)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default MenuIcon;