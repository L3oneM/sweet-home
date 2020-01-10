import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header'

import HomePage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions'

const App = ({ checkUserSession, currentUser }) =>  {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
        <Route
         exact path='/signin'
         render={() => 
          currentUser
          ? <Redirect to='/' />
          :
          <SignInAndSignUp />
         }
        />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)