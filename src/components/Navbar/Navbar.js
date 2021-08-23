import React from 'react'
import './Navbar.css'

function Navbar() {
    return(
        <nav class="navbar">
        <ul class="navbar__list">
            <li class="navbar__item">
                <a class="navbar__link" href="#project">О проекте</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="#techs">Технологии</a>
            </li>
            <li class="navbar__item">
                <a class="navbar__link" href="#student">Студент</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;