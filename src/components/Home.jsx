import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => (
  <div id="home">
    <Jumbotron>
      <div id="home-text">
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="success" bsSize="large" block>Learn more</Button></p>
      </div>
    </Jumbotron>
  </div>
);

export default Home;
