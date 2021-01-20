import React from 'react';

import perfil from '../../img/perfil.jpg';

export const AboutMe = () => {
    return (
        <div className="container grid">
            <div className="about">
                <h2>Un poco sobre mí</h2>
                <hr/>
                <p>Estudie en la secundaria “Colegio Técnico Provincial Olga B. de Arko” con orientación en informática. Y actualmente soy estudiante de la carrera “Licenciatura en Sistemas (con orientación en Calidad de Software)” de la Universidad Nacional de Tierra del Fuego, actualmente curso materias de cuarto y quinto año.</p>
                <p>Tengo conocimientos en desarrollo de aplicaciones web y móviles, con tecnologías como React, Flutter, React Native, NodeJS, Laravel, MySQL.</p>
                <p>Soy una persona curiosa por las nuevas tecnologías, y realicé cursos online, por fuera de la universidad, de React, Flutter, maquetacion, creación de api REST.</p>
                <p>Fui dos años como ayudante alumno y dos años como profesor en el dictado de cursos de informática para personas de edad avanzada.</p>
                <p>Me gusta tanto el software como el hardware, por lo tanto tengo experiencia en soporte técnico, armado de computadoras y diagnósticos.</p>
                <hr/>
            </div>
            <div className="about image">
                <img src={perfil} alt="Perfil"></img>
            </div>
        </div>
    )
}
