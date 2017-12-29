import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllProjects from './AllProjects';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';

const App = () => (
  <div id="outer-container">
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Services} />
        <Route exact path="/work" component={AllProjects} />
        <Route exact path="/portfolio" component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
