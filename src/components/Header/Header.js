import React from "react"
import './Header.css'
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper section">
                <img src={logo} alt="" className="logo" />
                <div className="header__auth">
                    <a href="https://" className="header__link header__link_type_register">Регистрация</a>
                    <a href="https://" className="header__link header__link_type_login">Войти</a>
                </div>
            </div>
        </header>
    )
}


export default Header;