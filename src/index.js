import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from  './context/firebase'

import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyC9QO44wZxGiRadYnVPXHBNBzEoFw6UI5s",
    authDomain: "notflix-clone.firebaseapp.com",
    databaseURL: "https://notflix-clone.firebaseio.com",
    projectId: "notflix-clone",
    storageBucket: "notflix-clone.appspot.com",
    messagingSenderId: "676696516494",
    appId: "1:676696516494:web:97e175fc13567b8a1ee6df"
}

firebase.initializeApp(config)


ReactDOM.render(
  <React.StrictMode>
    <>
        <FirebaseContext.Provider value={{ firebase: firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
