import React from 'react';
import Header from './Header';


const About = () => (
  <div className="section">
    <Header title="About" />
    <div id="headshotContainer">
      <img
        src="/images/HeadshotOutline.png"
        alt="Shelby Rackley's Face"
        className="animate fadeIn three"
      />
      <div id="aboutText" className="animate fadeIn three">
        <p>Coming from a background in fine art,
        I bring my eye for design,
        knack for troubleshooting, and proclivity for exploration to my
        work as a full stack software developer.
        I craft responsive websites that are beautifully styled,
        composed of high-performance code, and functionally elegant.
        My place in the world is at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design, art, or code—only the tools change.
        </p>
        <p>
        While growing up, I loved riddles. I would spend hours trying to solve the logic problems that my dad presented to me. Software Engineering is a natural extension of those early desires to find the missing piece that makes the problem suddenly become clear.
        Working as a software engineer, I am continually discovering new
        methodologies and integrating them into my
        set of resources for turning a muddle of
        problems into a streamlined and creative solution.
        </p>
      </div>
    </div>
  </div>
);

export default About;
