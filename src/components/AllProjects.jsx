import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';

const data = [
  {
    id: 1,
    name: 'Cage Match',
    position: 'Web Developer',
    image: '/images/CageMatch.png',
    description: 'An easy to use, modern e-commerce site with persistent state and user authentification. Cage Match is an e-commerce website for purchasing Nicholas Cage roles.',
    date: 'November 2017',
    tags: ['e-commerce', 'OAUTH', 'Express.js', 'Node.js', 'Passport', 'React', 'Sequelize', 'Webpack'],
  },
  {
    id: 2,
    name: 'Palimpsest',
    position: 'Solo Developer',
    image: '/images/Palimpsest.png',
    description: 'Palimpsest is a prototype for a social e-Reader with the capability to share notes, highlights, and theories with friends who share the same book.',
    date: 'November 2017',
    tags: ['eReader', 'React', 'Firebase', 'Axios', 'ePub', 'Node.js', 'Webpack'],
  },
  {
    id: 3,
    name: 'Whiskr',
    position: 'Web Developer',
    image: '/images/Whiskr.png',
    description: 'Whiskr is a Tinder-like progressive web app for pairing users with local adoptable pets. Whiskr will streamline your pursuit of a cuddly companion by implementing a tinder-like swiping mechanism to pair you with local pets.',
    date: 'November 2017 - December 2017',
    tags: ['React', 'Node.js', 'Express.js', 'Sequelize', 'Create-React-App', 'React-Swipe-Card', 'Heroku'],
  },
];

const AllProjects = () => (
  <Grid className="section">
    <Header title="Work" />
    <Row className="row">
      {
          data.map(project => (
            <Col xs={12} md={4} className=" item" key={project.id}>
              <img src={project.image} alt="Device display of {project.name}" />
              <h2>{project.name}</h2>
              <div>
                <button >Demo</button>
                <button >Code</button>
                <div>
                  <div>{project.date}</div>{project.description}
                </div>
                <div>{project.tags.join(', ')}
                </div>
              </div>
            </Col>
          ))
        }
    </Row>
  </Grid>
);

export default AllProjects;
