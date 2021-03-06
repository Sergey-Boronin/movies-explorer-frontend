import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

export default function Register(props) {
  return (
    <section className='register'>
      <div className='register__container'>

        <Link className='register__link' to='/'><img className='register__logo' src={logo} alt='на главную' /></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <label className='register__label'>Имя</label>
          <input className='register__input' />
          <span className='register__error-label'>Текст ошибки</span>
          <label className='register__label'>Email</label>
          <input type='email' className='register__input' />
          <span className='register__error-label'>Текст ошибки</span>
          <label className='register__label'>Пароль</label>
          <input type='password' className='register__input' />
          <span className='register__error-label'>Текст ошибки</span>
          <button className='register__button'>Зарегистрироваться</button>
        </form>
        <p className='register__text'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
  )
};