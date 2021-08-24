import React from "react"
import './Header.css'
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper section">
                <nav class="navigation">
                <a class="navigation__link navigation__link_type_logo" href="/"><img src="./images/logo.svg" alt="" class="logo" /></a>
                    <div class="navigation__auth">
                        <a href="#" class="navigation__link navigation__link_type_register">Регистрация</a>
                        <a href="#" class="navigation__link navigation__link_type_login">Войти</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header;