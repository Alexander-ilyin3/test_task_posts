import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import './scss/main.scss';
import 'core-js/actual';

// import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
