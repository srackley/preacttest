import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import Skills from './Skills';
import About from './About';
import Art from './Art';
import Navbar from './Navbar';

const App = () => (
  <div id="outer-container">
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/art" component={Art} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
