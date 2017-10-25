import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import AllProjects from './AllProjects';


const App = () => (
  <div id="outer-container">
    <Sidebar />
    <main id="page-wrap">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={AllProjects} />
      </Switch>
    </main>
  </div>
);

export default App;
