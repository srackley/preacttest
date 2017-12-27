import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const nouns = [
  'a creator', 'a designer', 'a communicator', 'helpful', 'a leader', 'a teacher', 'a learner', 'a maker', 'creative', 'dedicated', 'intelligent', 'passionate', 'an explorer', 'enthusiastic', 'an artist', 'a Developer', 'versatile', 'resourceful', 'clever', 'efficient', 'productive', 'skillful', 'an innovator', 'confident',
];


function getRandomIndex() {
  return Math.floor(Math.random() * nouns.length);
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noun: 'a Software Engineer',
    };
  }

  componentDidMount() {
    this.setNoun =
    setInterval(() => this.shuffleNoun(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setNoun);
  }

  shuffleNoun() {
    this.setState({
      noun: nouns[getRandomIndex()],
    });
  }

  render() {
    return (
      <Jumbotron>
        <div className="text">
          <h2>
            Shelby Rackley is <br />{this.state.noun}.
          </h2>
          <p><Button bsStyle="success" bsSize="large" className="shadow1 button" href="/about">Learn more</Button></p>
        </div>
      </Jumbotron>
    );
  }
}
