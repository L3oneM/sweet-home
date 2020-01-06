import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'
import { clearCart } from '../../redux/cart/cart.actions'

import CartIcon from '../cart-icon/CartIcon'

import { ReactComponent as Logo } from '../../assets/logo2.svg'

import './header.styles.scss'

const Header = ({ currentUser, clearCart }) => {

  const signOutAndCleanCart = () => {
    auth.signOut()
    clearCart()
  }

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
              <div className='option' onClick={signOutAndCleanCart}>Sign Out
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
  clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);