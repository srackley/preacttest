import React from 'react';
import FontAwesome from 'react-fontawesome';
import Header from './Header';

const Services = () => (
  <div id="servicesSection" style={{ padding: '4vw' }}>
    <Header title="Skills" />
    <div className="row">
      <div className="item animate fadeIn three">
        <FontAwesome name="laptop" className="otto" />
        <h2>Front End</h2>
        <p>I create fast loading, responsive front ends using high quality, tested HTML5, CSS3, & JavaScript. I build modular, streamlined React components into a dynamic interface.</p>
        <h3>CSS, HTML, JavaScript, ES6, React, Redux, jQuery, Sass</h3>
      </div>
      <div className="item animate fadeIn four">
        <FontAwesome name="code" className="otto" />
        <h2>Back End</h2>
        <p>I use Node on the client side and have primarily worked with PostgreSQL servers, as well as NoSQL. I build RESTful APIs, utilize Git for version control, and write clean, portable code.</p>
        <h3>NodeJS, APIs, NoSQL, Express, PostgreSQL</h3>
      </div>
    </div>
  </div>
);

export default Services;
