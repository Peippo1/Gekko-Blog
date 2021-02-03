// fire.js

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrshZzFB80pAXbWg1hZmxHSxo1mwb4C-Q",
    authDomain: "geko-blog.firebaseapp.com",
    projectId: "geko-blog",
    storageBucket: "geko-blog.appspot.com",
    messagingSenderId: "275207630456",
    appId: "1:275207630456:web:20a416530cd8bf0335878d"
  };
//   try/catch firebase 
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }
  const fire = firebase;
  export default fire;