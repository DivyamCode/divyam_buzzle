import React from "react";
import { ReactDOM } from "react";
import './CSS/sidebar.css';
import './CSS/event.css';


function Side(){
    return (<>
    <div className="sidebar">
        <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#services"><i class="fa fa-fw fa-wrench"></i> Cultures</a>
         <a href="#clients"><i class="fa fa-fw fa-user"></i> Rooms</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Playlist</a>
        <br></br>
        <div><b>Recommended Rooms</b></div>
        <br></br>
        <a href="#home"><span className="dot"></span> codewithharry<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> clever simplified<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Join</button></a>
        <br></br>
        <b>Recommended Creators</b>
        <br></br>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
        <a href="#home"><span className="dot"></span> finlight<button className="joinb">Room</button></a>
     </div>
     
    </>
 )
};
export default Side;