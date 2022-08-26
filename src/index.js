import React from 'react';
import { render }from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // for app to be responsive as it only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page
const root = document.getElementById('root');
render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  ,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
