import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './components/App';

// Create root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render application in root element
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


