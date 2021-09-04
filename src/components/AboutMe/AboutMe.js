import './AboutMe.css';
import React from "react";
import photo from '../../images/portfolio-photo.jpg';

function AboutMe() {
  return (
    <section className = 'about-me'>
      <h2 className = 'about-me__title'>Студент</h2>
      <div className = 'about-me__title-line'></div>
      <div className = 'about-me__container'>
        <div className = 'about-me__text'>
          <h2 className = 'about-me__name'>Сергей</h2>
          <h3 className = 'about-me__description'>Фронтенд-разработчик, 35 лет</h3>
          <p className = 'about-me__history'>Всем привет! Я родился и живу в городе Тула. 
          3 года назад ворвался в Digital на менеджерскую позицию, проникся духом разработки и решил сам стать разработчиком.
          Сейчас фрилансер, параллельно доучиваюсь в Яндекс. Практикум. Люблю все и всех.</p>
          <div className = 'about-me__links'>
            <a href = 'https://www.instagram.com/bo_ronin/' className = 'about-me__link'>Instagram</a>
            <a href = 'https://github.com/Sergey-Boronin' className = 'about-me__link'>Github</a>
          </div>
        </div>
        <div>
          <img alt ='me' src = { photo } className = 'about-me__photo'/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;