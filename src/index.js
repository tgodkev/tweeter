import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './components/RouteSwitch';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from './firebase-config'
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
   <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);