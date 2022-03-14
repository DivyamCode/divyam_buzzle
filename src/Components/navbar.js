import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/navbar.css'



function Nav(){
    return (<>
    <div className="topnav">
        <button className='button1'>Login</button>
        <button className='button2'>SignUp</button>
        <input className='search' type="text" placeholder="Search..">
        </input>
    </div>
    </>
 )
};

export default Nav;