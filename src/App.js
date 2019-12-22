import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header'
import HomePage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const App = () =>  {
  const [ currentUser, setUser ] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setUser(userAuth)

    })

    return () => {
      console.log('I am unsubscribing!')
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
