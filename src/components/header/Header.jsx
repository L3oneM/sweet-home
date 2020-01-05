import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'

import { ReactComponent as Logo } from '../../assets/logo2.svg'

import './header.styles.scss'

const Header = ({ currentUser }) => {
  return (
    <div className='header-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop' >All products</Link>
        <Link className='option' to='/shop/sales' >Sales</Link>
        <Link className='option' to='/contact' >Contact</Link>
        {
          currentUser
           ?
           <div className='right-items fav-out'>
              <div
               className="option favorites"
               onClick={() => console.log('object')}
              >
              </div>
              <div className='option' onClick={() => auth.signOut()}>Sign Out
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

export default connect(mapStateToProps)(Header);