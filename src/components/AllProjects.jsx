import React, { Component } from 'react';
import Modal from 'react-modal';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const data = [
  {
    id: 1,
    name: 'Grace Shopper',
    position: 'Web Developer',
    image: 'https://www.thebestdesigns.com/theme-images/themeforest-total-1.jpg',
    description: 'An easy to use, modern e-commerce site with persistent state and user authentification',
    date: 'November, 2017',
    tags: ['e-commerce', 'OAUTH', ''],
  },
  {
    id: 2,
    name: 'Stackathon',
    position: 'Solo Developer',
    image: 'https://lh3.googleusercontent.com/4q3zGLnqa8NXp4zPaGovXslTWbTuFTJL_7HEPinkZFeXCQOoSEtKcq2MkpuqhP6u6Kqq-6nmykc=w640-h400-e365',
    description: 'Something that has yet to be developed',
    date: 'November, 2017',
    tags: ['Solo Developer', 'Hackathon Project'],
  },
  {
    id: 3,
    name: 'Capstone',
    position: 'Web Developer',
    image: 'https://conversionxl.com/wp-content/uploads/2012/11/cm.jpg',
    description: 'A grueling challenge that is developed over three weeks of crying and fights',
    date: 'December, 2017',
    tags: ['Longterm Project', 'Agile Development'],
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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    return (
      <Grid className="section">
        <Header title="Projects" />
        <Row className="row">
          {
          this.state.projects.map(project => (
            <Col xs={12} md={4} className=" item" key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                href={`/projects/${project.id}`}
              >
                <Thumbnail src={project.image} />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Link>
              <div>
                <button onClick={this.openModal}>See More</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel={project.name}
                >

                  <h2 ref={subtitle => this.subtitle = subtitle}>{project.name}</h2>
                  <button onClick={this.closeModal}>close</button>
                  <div>{project.description}</div>
                  <div>{project.date}</div>

                  <form>
                    <input />
                    <button>tab navigation</button>
                  </form>
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
