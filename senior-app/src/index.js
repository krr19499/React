import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

const firebase= require("firebase");
require("firebase/firestore");

firebase.initializeApp({ 
    apiKey: "AIzaSyB8Sj7rq-a0nZSYgjHLwW9GmIqe_6mNv7o",
    authDomain: "im-tutorial-a3aaa.firebaseapp.com",
    databaseURL: "https://im-tutorial-a3aaa.firebaseio.com",
    projectId: "im-tutorial-a3aaa",
    storageBucket: "im-tutorial-a3aaa.appspot.com",
    messagingSenderId: "775229379819",
    appId: "1:775229379819:web:4e90ef4b2a3b5c9e935aae",
    measurementId: "G-TX9Z0LXYLX"
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
