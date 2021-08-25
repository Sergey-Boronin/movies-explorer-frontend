import React from 'react';
import './AboutProject.css';


export default function AboutProject(props) {
  return (
    <section className="project" id="project">
            <h2 className="project__title">О проекте</h2>
            <div className="project-wrapper">
                <div className="project-article">
                    <p className="project-article__title">
                        Дипломный проект включал 5 этапов
                    </p>
                    <p className="project-article__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>  
                </div>
                <div className="project-article">
                    <p className="project-article__title">
                        На выполнение диплома ушло 5 недель
                    </p>
                    <p className="project-article__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>  
                </div>
            </div>
            <div className="stages">
                <span className="stages__item">1 неделя</span>
                <span className="stages__item">4 недели</span>
            </div>
    </section>
  )
};