import './navbar.css';
import React from 'react';

function NavBar() {
    return (
        <div class="topnav">
            <a class="dis" href="#contact" >+021 345-6789</a>
            <a class="dis" href="#contact" >rentacar@gmail.com</a>
            
            <div class="topnav-right">
                <a href="login.js">Prijava</a>
                <a href="registration.js">Registracija</a>
            </div>
        </div>
    );
}

export default NavBar;