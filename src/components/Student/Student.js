import React from 'react'
import './Student.css'
import photo from '../../images/feynman.png'

function Student() {
    return(
        <section className="student section" id="student">
        <h2 className="section__title">Студент</h2>
        <div className="student__info">
            <div className="student-wrapper">
                
                <p className="student__name">Сергей</p>
                <p className="student__adout">Фронтенд-разработчик, 35 лет</p>
                <p className="student__text">
                    Lorem ipsum dolor sit amet,orem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusantium explicabo dolores cupiditate maxime architecto. Fugit nulla rem nobis facere illo dicta! 
                    Aperiam molestias cumque dolores deleniti impedit voluptates. Consequatur?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusantium explicabo dolores cupiditate maxime architecto. Fugit nulla rem nobis facere illo dicta! 
                    Provident accusantium explicabo dolores cupiditate maxime architecto. Fugit nulla rem nobis facere illo dicta! 
                    Aperiam molestias cumque dolores deleniti impedit voluptates. Consequatur?
                    Lng elit. Provident accusantium explicabo dolores cupiditate maxime architecto. Fugit nulla rem nobis facere illo dicta! 
                    Aperiam molestias cumque dolores deleniti impedit voluptate
                </p>
                <div className="student__links">
                    <a href="#" className="student__link">Facebook</a>
                    <a href="#" className="student__link">Github</a>
                </div>
            </div>
            <img className="student__photo" src={photo} alt="" />
        </div>
    </section>
    )
}

export default Student;