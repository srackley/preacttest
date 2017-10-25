import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import '../index.css';


class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
