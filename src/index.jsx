import React from 'react';
import Hamburger from './mui/Hamburger';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HamburgerCard from './mui/HamburgerCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{marginTop: '40px', marginLeft: '20px', marginRight: '20px'}}>
      <Hamburger />
      <div style={{padding: '50px'}}>
      <HamburgerCard/>
      </div>
      <hr />
    </div>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();