import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { HomeScreen } from '../components/screens/HomeScreen';
import { ProjectsScreen } from '../components/screens/ProjectsScreen';
import { ContactScreen } from '../components/screens/ContactScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <div className="navbar">
                    <div className="container flex">
                        <nav>
                            <ul>
                                <li>
                                <Link to="/">Inicio</Link>
                                </li>
                                {/* <li>
                                <Link to="/projects">Proyectos</Link>
                                </li> */}
                                <li>
                                <Link to="/contact">Contacto</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <Switch>
                    <Route path="/contact">
                        <ContactScreen />
                    </Route>
                    {/* <Route path="/projects">
                        <ProjectsScreen />
                    </Route> */}
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
                
            </div>
        </Router>
    )
}
