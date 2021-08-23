import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return(
        <section className="portfolio section">
                    <h2 className="portfolio__title">Портфолио</h2>
                    <div className="portfolio__wrapper">
                        <div className="portfolio__item">
                            <a href="" className="portfolio__link">Статичный сайт</a>
                        </div>
                        <div className="portfolio__item">
                            <a href="" className="portfolio__link">Адаптивный сайт</a>
                        </div>
                        <div className="portfolio__item">
                            <a href="" className="portfolio__link">Одностраничное приложение</a>
                        </div>
                    </div>
                </section>
    )
}

export default Portfolio;