import React from 'react';
import Header from './Header';

const Services = () => (
  <div id="servicesSection" style={{ padding: '4vw' }}>
    <Header title="Skills" />
    <div className="row largeText">
      <div className="skill animate fadeIn two">
        <h2>Front End</h2>
          <div className="threes">
            <div className="item animate fadeIn three">
              <img src={require('../styles/icons/responsive.svg')} alt="Laptop and phone" />
              <p>I craft responsive designs through requirements gathering, developing, and refactoring.</p>
            </div>
            <div className="item animate fadeIn four">
              <img src={require('../styles/icons/code.svg')} alt="Desktop with code" />
              <p>I craft websites using high quality, tested HTML5, CSS3, & JavaScript.</p>
            </div>
            <div className="item animate fadeIn five">
              <img src={require('../styles/icons/award.svg')} alt="Website with ribbon" />
              <p>I build modular, streamlined React components into a dynamic interface.</p>
            </div>
          </div>
          <h3 className="animate fadeIn two">JavaScript, ES6, React, Redux, CSS/Sass, HTML</h3>
      </div>
      <br/>
      <div className="skill animate fadeIn six">
        <h2>Back End</h2>
          <div className="threes">
            <div className="item animate fadeIn six">
              <img src={require('../styles/icons/cloud.svg')} alt="Cloud" />
              <p>I develop APIs utilizing RESTful design patterns. I typically use Git for version control.</p>
            </div>
            <div className="item animate fadeIn seven">
              <img src={require('../styles/icons/algorithms.svg')} alt="Data and computer" />
              <p>I design, develop, and deploy backend services using Node.js to construct flexible microservice architectures.</p>
            </div>
            <div className="item animate fadeIn eight">
              <img src={require('../styles/icons/databases.svg')} alt="Databases" />
              <p>I work with relational databases and SQL as well as with NoSQL.</p>
            </div>
          </div>
        <h3 className="animate fadeIn six">NodeJS, RESTful APIs, NoSQL, SQL, Express.js, PostgreSQL</h3>
      </div>
    </div>
  </div>
);

export default Services;
