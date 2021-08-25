import React from 'react';
import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            href='https://sergey-boronin.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>
            Статичный сайт
          </a>

        </li>
        <li className='portfolio__item'>
          <a
            href='https://sergey-boronin.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>
            Адаптивный сайт
          </a>
    
        </li>
        <li className='portfolio__item'>
          <a href='https://github.com/Sergey-Boronin/react-mesto-api-full' target='_blank' rel='noreferrer' className='portfolio__link'>Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  )
};