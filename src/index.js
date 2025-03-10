import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';

// import $ from 'jquery';
// import Popper from 'popper.js';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles'
// // import "font-awesome/css/font-awesome.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles>
    
    <App />
    </GlobalStyles>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
