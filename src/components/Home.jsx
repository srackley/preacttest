import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => (
  <div id="home">
    <Jumbotron>
      <div id="home-text" className="shadow4 center">
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="success" bsSize="large" className="shadow1">Learn more</Button></p>
      </div>
    </Jumbotron>
    <div />
  </div>
);

export default Home;
