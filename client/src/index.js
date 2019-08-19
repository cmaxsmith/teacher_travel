import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/react-mdl/extra/material.css';
import '../node_modules/react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
