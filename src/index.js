import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
// import the styles 
import "./css/style.css";

render (
    <App/> 
    , document.querySelector('#main')
  );