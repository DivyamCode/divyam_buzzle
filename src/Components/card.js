import React from "react";
import { ReactDOM } from "react";
import './CSS/card.css';
import I from './image/image.jpg';

function Card(){
    return (<>

<div className="card">
    <div className="live">LIVE</div>
    <span className="dotdot"></span>
    <a href="#">
    <img  src={I} alt="" width="192" height="200"  ></img>
    <p className="p" >here this is live/video tag description</p></a>
    
    
  </div>

    
    </>)
};
export default Card;