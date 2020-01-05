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

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = (props) =>  {
  const { setCurrentUser } = props

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );
        });
      }

      setCurrentUser(userAuth)
    })

    return () => {
      console.log('I am unsubscribing!')
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])

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
          props.currentUser
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
