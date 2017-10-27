import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const AllProjects = () => (
  <Grid id="projectsSection" className="section">
    <PageHeader>Projects</PageHeader>
    <Row>
      <Col xs={12} md={4} className="shadow3 shadow1 oneProject">
        <Link to="/projects/1">
          <Thumbnail src="https://www.thebestdesigns.com/theme-images/themeforest-total-1.jpg" />
        </Link>
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Col>
      <Col xs={12} md={4} className="shadow3 shadow1 oneProject">
        <Link to="/projects/2">
          <Thumbnail src="https://lh3.googleusercontent.com/4q3zGLnqa8NXp4zPaGovXslTWbTuFTJL_7HEPinkZFeXCQOoSEtKcq2MkpuqhP6u6Kqq-6nmykc=w640-h400-e365" />
        </Link>
        <h2>Project 2</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
      </Col>
      <Col xs={12} md={4} className="shadow3 shadow1 oneProject">
        <Link to="/projects/3">
          <Thumbnail src="https://conversionxl.com/wp-content/uploads/2012/11/cm.jpg" />
        </Link>
        <h2>Project 3</h2>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </Col>
    </Row>
  </Grid>
);

export default AllProjects;
