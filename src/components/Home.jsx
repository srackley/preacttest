import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Typed from 'typed.js';

export default class Home extends React.Component {
  componentDidMount() {
    const strings = [
      'a creator.', 'a designer.', 'a communicator.', 'helpful.', 'a leader.', 'a teacher.', 'a maker.', 'creative.', 'dedicated.', 'intelligent.', 'passionate.', 'an explorer.', 'enthusiastic.', 'an artist.', 'a developer.', 'versatile.', 'resourceful.', 'clever.', 'efficient.', 'productive.', 'skillful.', 'an innovator.', 'confident.', 'curious.', 'humble.', 'a fast learner.', 'focused.', 'logical.', 'persistent.', 'honest.', 'disciplined.',
    ];
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      shuffle: true,
      startDelay: 500,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <Jumbotron>
        <div className="text">
        Shelby Rackley is <br />
          <span id="typed" ref={(el) => { this.el = el; }} />
        </div>
        <Button bsStyle="success" bsSize="large" className="shadow1 button" href="/about">
          About Shelby
        </Button>
      </Jumbotron>
    );
  }
}
