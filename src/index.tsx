import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import App from './containers/App/App';

axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
