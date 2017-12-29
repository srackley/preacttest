import React from 'react';
import Header from './Header';


const About = () => (
  <div className="section">
    <Header title="About" />
    <div id="headshotContainer">
      <img
        src="/images/Headshot.png"
        alt="Shelby Rackley's Face"
      />

    </div>
    <div>
      Description of my life and stuff.
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
