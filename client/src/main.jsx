import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { customFetch } from 'utils/CustomFetch.jsx';

const data = await customFetch.get('/api/v1/test');
console.log(data);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
