import React from 'react';
import FontAwesome from 'react-fontawesome';
import Header from './Header';

const Services = () => (
  <div id="servicesSection" style={{ padding: '4vw' }}>
    <Header title="Skills" />
    <div className="row largeText">
      <div className="item animate fadeIn three">
        <h2>Front End</h2>
        <div><FontAwesome name="laptop" className="otto" />
          <FontAwesome name="mobile" className="otto" />
          <FontAwesome name="television" className="otto" />
        </div>
        <p>I create fast-loading, responsive front ends starting with requirements gathering, designing, developing, refactoring, and code implementation. I craft websites using high quality, tested HTML5, CSS3, & JavaScript. I build modular, streamlined React components into a dynamic interface in order to provide users with a streamlined, clearly defined, and pleasant experience.</p>
        <h3>JavaScript, ES6, React, Redux, CSS/Sass, HTML</h3>
      </div>
      <div className="item animate fadeIn four">
        <h2>Back End</h2>
        <div>
          <FontAwesome name="server" className="otto" />
          <FontAwesome name="database" className="otto" />
          <FontAwesome name="cloud" className="otto" />
        </div>
        <p>I design, develop, and deploy backend services with a focus on high availability, low latency. I use Node.js to construct flexible microservice architectures. I have experience working with relational databases and SQL as well as with NoSQL databases. I have experience in API development utilizing RESTful design patterns. I use Git for version control, and write clean, portable code.</p>
        <h3>NodeJS, RESTful APIs, NoSQL, SQL, Express.js, PostgreSQL</h3>
      </div>
    </div>
  </div>
);

export default Services;
