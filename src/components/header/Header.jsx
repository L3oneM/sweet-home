import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'

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
        <Link className='option' to='/sales' >Sales</Link>
        <Link className='option' to='/about' >About</Link>
        {
          currentUser
           ?
           <div className='option right-items' onClick={() => auth.signOut()}>Sign Out</div>
           :
           <Link className='option right-items' to='/signin' >Sign In</Link>
        }
        <Link className='option right-items' to='/cart' >Cart</Link>
      </div>
    </div>
  )
};

const mapStateToProps =state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);