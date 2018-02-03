import React from 'react';
import Typed from 'typed.js';

export default class Home extends React.Component {
  componentDidMount() {
    const strings = [
      'a creator.', 'passionate.', 'a designer.', 'efficient.', 'current.', 'helpful.', 'a leader.', 'a teacher.', 'curious.', 'a maker.', 'creative.', 'dedicated.', 'intelligent.', 'an explorer.', 'enthusiastic.', 'an artist.', 'versatile.', 'resourceful.', 'clever.', 'productive.', 'skillful.', 'an innovator.', 'confident.', 'a fast learner.', 'focused.', 'logical.', 'persistent.', 'honest.', 'disciplined.', 'humble.',
    ];
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 40,
      startDelay: 1000,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="text">
          <h1 id="hello" className="neon animate fadeIn one">HELLO!</h1>
          <h2 className="animate fadeIn three">My name is Shelby Rackley. <br /> I am a Software Engineer in New York City. <br /> I am also <span id="typed" ref={(el) => { this.el = el; }} />
          </h2>

        </div>
        <div className="bottom">
          <a
            href="/ShelbyRackley.pdf"
            download
            id="resumeLink"
            className="animate fadeIn eight"
          >
            <h3 className="animate fadeIn eight">I am currently seeking full-time opportunities!</h3>
          </a>
        </div>
      </div>
    );
  }
}
