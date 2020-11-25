import React from 'react';

import javascript from '../../img/javascript.svg';
import node from '../../img/node.png';
import php from '../../img/php.svg';
import react from '../../img/react.svg';
import rnative from '../../img/react-native.png';
import flutter from '../../img/flutter.png';
import dart from '../../img/dart.png';
import git from '../../img/git.png';
import laravel from '../../img/laravel.png';
import postgres from '../../img/postgres.png';
import mongo from '../../img/mongodb.png';
import adobexd from '../../img/adobexd.png';

export const Tecnologies = () => {
    return (
        <div>
            <section className="tecnologies">
                <h2 className="md text-center my-2">
                    Lenguajes y Tecnologías
                </h2>
                <div className="container flex">
                    <div className="card">
                        <h4>JavaScript</h4>
                        <img src={javascript} alt=""/>
                    </div>
                    <div className="card">
                        <h4>Node.js</h4>
                        <img src={node} alt=""/>
                    </div>
                    <div className="card">
                        <h4>PHP</h4>
                        <img src={php} alt=""/>
                    </div>
                    <div className="card">
                        <h4>React</h4>
                        <img src={react} alt=""/>
                    </div>
                    <div className="card">
                        <h4>Flutter</h4>
                        <img src={flutter} alt=""/>
                    </div>
                    <div className="card">
                        <h4>React Native</h4>
                        <img src={rnative} alt=""/>
                    </div>
                    <div className="card">
                        <h4>Dart</h4>
                        <img src={dart} alt=""/>
                    </div>
                    <div className="card">
                        <h4>Git</h4>
                        <img src={git} alt=""/>
                    </div>
                    <div className="card">
                        <h4>Laravel</h4>
                        <img src={laravel} alt=""/>
                    </div>
                    <div className="card">
                        <h4>PostgreSQL</h4>
                        <img src={postgres} alt=""/>
                    </div>
                    <div className="card">
                        <h4>MongoDB</h4>
                        <img src={mongo} alt=""/>
                    </div>
                    <div className="card">
                        <h4>AdobeXD</h4>
                        <img src={adobexd} alt=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}
