import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAPGmYRDyGzpzBDmIYLLIGpOVi5DohZCk0",
  authDomain: "noteit-neog.firebaseapp.com",
  projectId: "noteit-neog",
  storageBucket: "noteit-neog.appspot.com",
  messagingSenderId: "843232270044",
  appId: "1:843232270044:web:bc2c2bf50b7f3415fb0619",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
