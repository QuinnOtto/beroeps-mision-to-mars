import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
