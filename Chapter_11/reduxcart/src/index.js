import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import cartReducer from "./reducer";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

var destination = document.querySelector("#container");

var store = createStore(cartReducer);


ReactDom.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  destination
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
