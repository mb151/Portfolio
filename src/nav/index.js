import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/home";
import Loading from "../pages/loading";
import About from '../pages/about';
import Contact from '../pages/contact';
import Formation from '../pages/formation';
import Experience from '../pages/experience';
import Skills from '../pages/skills';


export default function Nav() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Loading} /> 
                <Route path="/home" component={Home}/>
                <Route path="/formation" component={Formation}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route path="*" component={Home}/>
            </Switch>
        </Router>
    )
}

