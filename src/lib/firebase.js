<<<<<<< HEAD
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
=======
/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
<<<<<<< HEAD
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRXzTGFbssFI_Vgt69WYFu5HAtJeW2vhk",
    authDomain: "red-social-sport-fem.firebaseapp.com",
    projectId: "red-social-sport-fem",
    storageBucket: "red-social-sport-fem.appspot.com",
    messagingSenderId: "136278586908",
    appId: "1:136278586908:web:90cef68cefc0a1dc1751d9",
    measurementId: "G-QK2DZJ2H58",
  };
=======
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCRXzTGFbssFI_Vgt69WYFu5HAtJeW2vhk',
  authDomain: 'red-social-sport-fem.firebaseapp.com',
  projectId: 'red-social-sport-fem',
  storageBucket: 'red-social-sport-fem.appspot.com',
  messagingSenderId: '136278586908',
  appId: '1:136278586908:web:90cef68cefc0a1dc1751d9',
  measurementId: 'G-QK2DZJ2H58',
};
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app);
const provider = new GoogleAuthProvider(app);

export const signInGoogle = () => {
<<<<<<< HEAD
    signInWithPopup(auth, provider)
=======
  signInWithPopup(auth, provider)
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
<<<<<<< HEAD
      console.log("user",user)
      // ...
    }).catch((error) => {
=======
      console.log('user', user);
      // ...
    })
    .catch((error) => {
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
<<<<<<< HEAD
      console.log("error",errorMessage)
        
      });
  };
 
=======
      console.log('error', errorMessage);
    });
};
/* export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("logged in with google");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });
}; */
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb
