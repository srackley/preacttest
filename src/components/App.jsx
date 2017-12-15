import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Home from './Home';
import AllProjects from './AllProjects';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/projects" component={AllProjects} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
