import React from 'react';
import { Jumbotron, Button, PageHeader, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Home = () => (
  <div id="home">
    <Jumbotron>
      <div id="home-text" className="shadow4 center">
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="success" bsSize="large" className="shadow1">Learn more</Button></p>
      </div>
    </Jumbotron>
    <Grid>
      <PageHeader>About</PageHeader>
      <Row>
        <Col xs={12} md={4} className="oneAbout">
          <FontAwesome name="html5" />
          <h2>Front End</h2>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </Col>
        <Col xs={12} md={4} className="oneAbout">
          <FontAwesome name="code" />
          <h2>Back End</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
        <Col xs={12} md={4} className="oneAbout">
          <FontAwesome name="css3" />
          <h2>UX</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Home;
