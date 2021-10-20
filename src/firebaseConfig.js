import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCT3u6uuFBiCI9tVVVvKff79RBHeEgsQco',
  authDomain: 'clone-f1b5e.firebaseapp.com',
  projectId: 'clone-f1b5e',
  storageBucket: 'clone-f1b5e.appspot.com',
  messagingSenderId: '774973838131',
  appId: '1:774973838131:web:48b275accc5ed6d4546446',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
