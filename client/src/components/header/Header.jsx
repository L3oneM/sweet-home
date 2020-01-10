import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { signOutStart } from '../../redux/user/user.actions'

import CartIcon from '../cart-icon/CartIcon'
import HumMenuIcon from '../hum-menu-icon/HumMenuIcon'

import { ReactComponent as Logo } from '../../assets/logo2.svg'

import './header.styles.scss'

const Header = ({ currentUser, signOutStart }) => {
  const [ isActive, setActive ] = useState(false)

  const handleChangeActive = () => {
    setActive(!isActive)
  }

  return (
    <div className='header-container'>
      <HumMenuIcon isActive={isActive} setActive={setActive} />
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <div className={`left-opt ${ isActive ? 'isActive' : '' }`}>
          <Link
           className='option'
           to='/shop'
           onClick={handleChangeActive}
           > All products</Link>
          <Link
           className='option'
           to='/shop/sales'
           onClick={handleChangeActive}
           > Sales</Link>
          <Link
           className='option'
           to='/contact'
           onClick={handleChangeActive}
           >Contact</Link>
        </div>
        {
          currentUser
           ?
           <div className='right-items fav-out'>
              {/* <div
               className="option favorites"
               onClick={() => console.log('object')}
              >
              </div> */}
              <div className='option' onClick={signOutStart}>Sign Out
              </div>
           </div>
           :
           <Link className='option right-items' to='/signin' >Sign In</Link>
        }
        <Link className='option right-items cart-icon-cnt' to='/cart' >
          <CartIcon />
        </Link>
      </div>  
    </div>
  )
};

const mapStateToProps =state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);