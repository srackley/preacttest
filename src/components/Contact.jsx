import React from 'react';
import FontAwesome from 'react-fontawesome';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <Grid id="contactSection" className="section">
    <PageHeader>Contact</PageHeader>
    <Row>
      <Col xs={12} md={4} className="item">
        <FontAwesome name="phone" className="otto" />
        <h2>Phone</h2>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
      </Col>
      <Col xs={12} md={4} className="item">
        <FontAwesome name="envelope" className="otto" />
        <h2>Email</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
      <Col xs={12} md={4} className="item">
        <FontAwesome name="linkedin" className="otto" />
        <FontAwesome name="linkedin" className="otto" />
        <h2>Social</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
      </Col>
    </Row>
  </Grid>
);

export default Contact;
