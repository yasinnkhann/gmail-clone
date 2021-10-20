import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Mail from './Mail.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import EmailList from './EmailList.js';
import SendMail from './SendMail.js';
import Login from './Login.js';
import { selectSendMessageIsOpen } from '../features/mailSlice.js';
import { selectUser, login } from '../features/userSlice.js';
import { auth } from '../firebaseConfig';
import '../styles/App.css';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>

              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
