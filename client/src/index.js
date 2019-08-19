import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/react-mdl/extra/material.css';
import '../node_modules/react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import configureStore from './store';


ReactDOM.render(<Provider store={configureStore()}>
  <BrowserRouter><App /></BrowserRouter>
</Provider>,
  document.getElementById('root'));
