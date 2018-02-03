import React from 'react';
import Header from './Header';

const Services = () => (
  <div id="servicesSection" style={{ padding: '4vw' }}>
    <Header title="Skills" />
    <div className="row largeText">
      <div className="skill item animate fadeIn three">
        <h2>Front End</h2>
        <div>
        <img src={require('../styles/icons/responsive.svg')} alt="Laptop and phone" />
        <img src={require('../styles/icons/code.svg')} alt="Desktop with code" />
        <img src={require('../styles/icons/award.svg')} alt="Website with ribbon" />
        </div>
        <p>I create fast-loading, responsive front ends starting with requirements gathering, designing, developing, refactoring, and code implementation. I craft websites using high quality, tested HTML5, CSS3, & JavaScript. I build modular, streamlined React components into a dynamic interface.</p>
        <h3>JavaScript, ES6, React, Redux, CSS/Sass, HTML</h3>
      </div>
      <div className="skill item animate fadeIn four">
        <h2>Back End</h2>
        <div>
        <img src={require('../styles/icons/cloud.svg')} alt="Cloud" />
        <img src={require('../styles/icons/algorithms.svg')} alt="Data and computer" />
        <img src={require('../styles/icons/databases.svg')} alt="Databases" />
        </div>
        <p>I design, develop, and deploy backend services using Node.js to construct flexible microservice architectures. I work with relational databases and SQL as well as with NoSQL. I develop APIs utilizing RESTful design patterns. I typically use Git for version control.</p>
        <h3>NodeJS, RESTful APIs, NoSQL, SQL, Express.js, PostgreSQL</h3>
      </div>
    </div>
  </div>
);

export default Services;
