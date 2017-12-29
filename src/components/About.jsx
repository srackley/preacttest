import React from 'react';
import Header from './Header';


const About = () => (
  <div className="section">
    <Header title="About" />
    <div id="headshotContainer">
      <div className="bar animate fadeInLeft one thin" style={{ width: '92vw' }} />
      <div className="bar animate fadeInLeft one thin" style={{ width: '80vw' }} />
      <div className="bar animate fadeInLeft one med" style={{ width: '68vw' }} />
      <div className="bar animate fadeInLeft one med" style={{ width: '56vw' }} />
      <div className="bar animate fadeInLeft one thick" style={{ width: '44vw' }} />
      <div className="bar animate fadeInLeft one thick" style={{ width: '32vw' }} />
      <div className="bar animate fadeInLeft one super" style={{ width: '20vw' }} />
      <div className="bar animate fadeInLeft one super" style={{ width: '8vw' }} />
      <img
        src="/images/Headshot.png"
        alt="Shelby Rackley's Face"
      />

    </div>
    <div>
      Description of my life and stuff and things
    </div>
    <div>
    Education and stuff. Certifications of courses and things.
    </div>

    <a href="/resume.pdf" download>
        Currently seeking full-time opportunities!
    </a>
  </div>
);

export default About;
