import React from 'react';
import 'systematize';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Home from '../Home';
import Projects from '../Projects';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './App.scss';

const App = () => (
    <div className="container">
        <Sidebar />
        <article>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </article>
    </div>
);

export default App;
