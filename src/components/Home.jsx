import React from 'react';
import Typed from 'typed.js';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  componentDidMount() {
    const strings = [
      'a creator.', 'passionate.', 'a designer.', 'efficient.', 'current.', 'helpful.', 'a leader.', 'a teacher.', 'curious.', 'a maker.', 'creative.', 'dedicated.', 'intelligent.', 'an explorer.', 'enthusiastic.', 'an artist.', 'versatile.', 'resourceful.', 'clever.', 'productive.', 'skillful.', 'an innovator.', 'confident.', 'a fast learner.', 'focused.', 'logical.', 'persistent.', 'honest.', 'disciplined.', 'humble.',
    ];
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 40,
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
          <h2>My name is Shelby Rackley. <br /> I am a Full Stack Web Developer. <br /> I am also <span id="typed" ref={(el) => { this.el = el; }} />
          </h2>

        </div>
        <div className="bottom">
          <NavLink to="/about" >
            <button id="heroButton" className="shadow1 outline-button animate fadeInUp three">About</button>
          </NavLink>
          <a
            href="/ShelbyRackley.pdf"
            download
            id="resumeLink"
            className="animate fadeIn eight"
          >
            <h3>I am currently seeking full-time opportunities!</h3>
          </a>
        </div>
      </div>
    );
  }
}
