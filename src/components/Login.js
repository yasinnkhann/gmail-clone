import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { login } from '../features/userSlice.js';
import { auth, provider } from '../firebaseConfig.js';
import '../styles/Login.css';

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png'
          alt=''
        />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}
export default Login;
