import React from 'react';
import Typed from 'typed.js';

export default class Home extends React.Component {
  componentDidMount() {
    const strings = [
      'a creator.', 'a designer.', 'a communicator.', 'helpful.', 'a leader.', 'a teacher.', 'a maker.', 'creative.', 'dedicated.', 'intelligent.', 'passionate.', 'an explorer.', 'enthusiastic.', 'an artist.', 'versatile.', 'resourceful.', 'clever.', 'efficient.', 'productive.', 'skillful.', 'an innovator.', 'confident.', 'curious.', 'humble.', 'a fast learner.', 'focused.', 'logical.', 'persistent.', 'honest.', 'disciplined.',
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
      <div className="jumbotron">
        <div className="text animate fadeIn one">
          <h1>HELLO!</h1>
          <h2>My name is Shelby Rackley. <br/> I am a Full Stack Web Developer. <br/> I am also <span id="typed" ref={(el) => { this.el = el; }} />
          </h2>
          <a href="/about">
          <button id="heroButton" className="shadow1 outline-button animate fadeInUp three">About</button>
          </a>
          <div>
          <a
      href="/resume.pdf"
      download
      id="resumeLink"
      className="animate fadeIn eight"
    >
    <h3>I am currently seeking full-time opportunities!</h3>
    </a>
    </div>
        </div>

      </div>
    );
  }
}
