import React from 'react';
import logo from "../img/logo.png"
import hamburger from "../img/hamburger.png"
function Nav () {
    return (
        <nav className="nav-bar">
                {/* <img className='hamburger' src={hamburger} alt="burgermenu"></img> */}
                <img className='nav-image' src={logo} alt="logoLittleLemon"></img>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Log in</a></li>
                </ul>
        </nav>
    )
}
export default Nav;
