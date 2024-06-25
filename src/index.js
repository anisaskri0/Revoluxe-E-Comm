// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css'; // Create this file to link your fonts

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
