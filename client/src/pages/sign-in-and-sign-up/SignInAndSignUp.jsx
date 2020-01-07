import React from 'react';

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/signUp/SignUp'

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;