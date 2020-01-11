import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header'
import Spinner from './components/spinner/Spinner'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions'

const HomePage = lazy(() => import('./pages/homepage/Homepage'))
const Shop = lazy(() => import('./pages/shop/Shop'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/SignInAndSignUp'))
const Cart = lazy(() => import('./pages/cart/Cart'))
const Contact = lazy(() => import('./pages/contact/Contact'))

const App = ({ checkUserSession, currentUser }) =>  {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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