import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apps/App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './mui/HelloWorld'
import Buttons from './mui/Buttons'
import TextInputs from './mui/TextInputs';
import Badges from './mui/Badges'
import Lists from './mui/NestedList';
import Tables from './mui/Tables'
import DataTable from './mui/DataTable'
import Alert from './mui/Alert'
import AppBar from './mui/AppBar'
import Cards from './mui/Cards'
import TemporaryDrawer from './mui/TemporaryDrawer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{marginTop: '40px', marginLeft: '20px', marginRight: '20px'}}>
      <AppBar />
      <hr />
      <Buttons />
      <hr />
      <TextInputs />
      <hr />
      <Badges />
      <hr />
      <Lists />
      <hr />
      <Tables /><DataTable />
      <hr />
      <Alert />
      <br /><br /><br /><br /><br /><br />
      <hr />
      <Cards />
      <hr />
      <TemporaryDrawer />
      <hr />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();