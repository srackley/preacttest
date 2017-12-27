import React, { Component } from 'react';
import Modal from 'react-modal';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
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
    image: '/images/Whiskr.jpeg',
    description: 'Whiskr is a Tinder-like progressive web app for pairing users with local adoptable pets. Whiskr will streamline your pursuit of a cuddly companion by implementing a tinder-like swiping mechanism to pair you with local pets.',
    date: 'November 2017 - December 2017',
    tags: ['React', 'Node.js', 'Express.js', 'Sequelize', 'Create-React-App', 'React-Swipe-Card', 'Heroku'],
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class AllProjects extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.setState({ projects: data });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    return (
      <Grid className="section">
        <Header title="Work" />
        <Row className="row">
          {
          this.state.projects.map(project => (
            <Col xs={12} md={4} className=" item" key={project.id}>
              <Thumbnail src={project.image} />
              <h2>{project.name}</h2>
              <div>
                <button onClick={this.openModal}>See More</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel={project.name}
                >
                  <button onClick={this.closeModal}>close</button>
                  <h2 ref={subtitle => this.subtitle = subtitle}>{project.name}</h2>
                  <div>
                    <div>{project.date}</div>{project.description}
                  </div>
                  <div>{project.tags.join(', ')}
                  </div>
                </Modal>
              </div>
            </Col>
          ))
        }
        </Row>
      </Grid>
    );
  }
}

export default AllProjects;
