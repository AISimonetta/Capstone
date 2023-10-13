import React, { useState } from 'react';
import Logo from "../img/Logo  (1).svg"
import hamburger from "../img/hamburger.png"
function Nav () {
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =( ) => {
        setMenuOpen (!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
            <img  src={Logo} alt="logoLittleLemon" ></img>
            </a>
            <div>
                <a href='/' className='menu-icon' onClick={toggleMenu}>
                    <img  src={hamburger} alt="burgermenu"></img>
                </a>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Orders</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>


            </ul>
        </nav>
    )
}
export default Nav;
