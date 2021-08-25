import React from 'react';
import photo from '../../images/portfolio-photo.jpg';
import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <section className='about-me'>
      <h2 id='student' className='about-me__title'>Студент</h2>
      <div className='about-me__description'>
        <div className='about-me__text-section'>
          <p className='about-me__name'>Сергей</p>
          <p className='about-me__role'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__brief'>Всем привет! Я родился и живу в городе Тула. 
          3 года назад ворвался в Digital на менеджерскую позицию, проникся духом разработки и решил сам стать разработчиком.
          Сейчас фрилансер, параллельно доучиваюсь в Яндекс. Практикум. Люблю все и всех.
          </p>
          <div className="about-me__links">
            <a href="https://www.instagram.com/bo_ronin/" target="_blank" rel="noreferrer" className="about-me__link">Instagram</a>
            <a href="https://github.com/Sergey-Boronin" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
          </div>
        </div>
        <img src={photo} alt='Sergey Boronin' className='about-me__photo' />
      </div>
    </section>
  )
};