import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Home from './Home';
import AllProjects from './AllProjects';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => (
  <div id="outer-container">
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={AllProjects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
