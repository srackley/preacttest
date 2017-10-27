import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => (
  <div id="homeSection">
    <Jumbotron>
      <div id="home-text">
        <h1>Shelby Rackley</h1>
        <p>Words describing me and what you'll find on this page and in further links if you choose to continute to traverse this wesite.</p>
        <p><Button bsStyle="success" bsSize="large" className="shadow1" id="learnMore" href="/about">Learn more</Button></p>
      </div>
    </Jumbotron>
  </div>
);

export default Home;
