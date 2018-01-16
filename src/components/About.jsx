import React from 'react';
import Header from './Header';


const About = () => (<div className="section">
  <Header title="About" />
  <div id="headshotContainer">
    <img
      src="/images/HeadshotOutline.png"
      alt="Shelby Rackley's Face"
      className="animate fadeIn three"
    />
    <a
      href="/art"
      style={
    {
      width: '50px',
      height: '50px',
      position: 'absolute',
      right: '113px',
      top: '100px',
      zIndex: '9999999',
    }
  }
    /> <div
      id="aboutText"
      className="animate fadeIn three"
    >
      <div className="largeText">
        <p > Coming from a background in fine art, I bring my eye for design, knack
  for troubleshooting, and proclivity
  for exploration to my work as a full stack software developer. I craft responsive websites that are beautifully styled,
  composed of high-performance code, and functionally elegant. My place in the world is at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design, art, or code— only the tools change.
        </p> <p >
    While growing up, I loved riddles. I would spend hours trying to solve the logic problems that my dad presented to me. Software Engineering is a natural extension of those early desires to find the missing piece that makes the problem suddenly become clear.
  Working as a software engineer, I am continually discovering new methodologies and integrating them into my set of resources
  for turning a muddle of
  problems into a streamlined and creative solution.
             </p>
      </div> <br />
      <div >
        <h2 > Education
        </h2>
        <p > December 2017 |
        <i > Software Engineering </i>
          <br />
          Grace Hopper Academy | New York, New York
        </p>
        <p > May 2016 |
        <i > Master of Fine Arts in Studio Art </i>
          <br />
          Texas A&M University – Commerce | Commerce, Texas
        </p>
        <p >
        May 2013 |
        <i > Bachelor of Arts in Fine Arts </i>
        |  Minor in Psychology
        <br />
          <small > Honors College Graduate with Distinction | Magna Cum Laude </small>
          <br />
          Harding University | Searcy, Arkansas
        </p>
      </div>
       </div>

  </div>
                     </div>
);

export default About;
