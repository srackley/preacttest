import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';


const About = () => (
  <Grid id="aboutSection" className="section">
    <Header title="About" />
    <Row>
      <Col xs={12} md={4} className="item" >
      Headshot
      </Col>
      <Col xs={12} md={8} className="item" >
      Description of my life and stuff and things
      </Col>
      <Col xs={12} md={4} className="item" >
      Spacer for now.
      </Col>
      <Col xs={12} md={8} className="item" >
      Education and stuff. Certifications of courses and things.
      </Col>
    </Row>
  </Grid>
);

export default About;
