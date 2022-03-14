import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/event.css';
import Card from './card';




function Event(){
    return (<>
    <div className='eventdiv'>
        <div className='eventdiv1'><b>Top <a href="#home">LIVE EVENTS</a> FROM  <a href="#home">DATA SCIENCE</a> WORLD  </b></div>
        <div className='eventdiv2'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    

        </div>
        
    </div>
    </>
 )
};


export default Event;