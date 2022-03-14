import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/event2.css';
import Card from './card';




function Event2(){
    return (<>
    <div className='event2div'>
        <div className='eventdiv1'><b>Top <a href="#home">LIVE EVENTS</a> FROM  <a href="#home">DATA SCIENCE</a> WORLD </b> </div>
        <div className='event2div1'>
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

export default Event2;