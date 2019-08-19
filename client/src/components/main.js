import React from 'react';
import LandingPage from './landingpage';
import MapPage from './mappage';
import About from './about';
import Survey from './survey'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/map" component={MapPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/survey" component={Survey} />
  </Switch>
)

export default Main;