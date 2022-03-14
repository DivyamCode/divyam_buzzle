import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/navbar.js';
import reportWebVitals from './reportWebVitals';
import Side from './Components/sidebar';
import Event from './Components/event';
import Event2 from './Components/event2';
import Card from './Components/card';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}   
    <Nav ></Nav>
    <Side></Side>
    <Event></Event>
    <Event2></Event2>
    <Event2></Event2>
    <Event2></Event2>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
