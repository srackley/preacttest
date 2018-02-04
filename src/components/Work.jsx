import React from 'react';
import Header from './Header';

const data = [
  {
    id: 6,
    name: 'The Final Meltdown',
    position: 'Developer',
    code: 'https://github.com/srackley/TheFinalMeltdown/tree/glitch',
    demo: 'https://thefinalmeltdown.glitch.me/',
    image: '/images/TheFinalMeltdown.png',
    description: 'The Final Meltdown is a virtual reality simulation of the melting polar ice caps as a result of climate change. Winner of the Best Open Source Hack at SheHacks Boston out of over 100 projects',
    date: 'January 2018',
    tags: ['A-Frame', 'Three.js', 'Javascript', 'HTML', 'WebVR'],
  },
  {
    id: 5,
    name: 'Legislative Accountability',
    position: 'Fullstack Developer',
    code: 'https://github.com/ChuckBTaylor/laa-backend',
    image: '/images/LAA.png',
    description: 'An app providing a text-subscription service to inform citizens about which way their legislators are voting. Winner of the Unglitch Net-Neutrality Hackathon',
    date: 'January 2018',
    tags: ['Ruby on Rails', 'Twilio', 'Rest-Client', 'ProPublica Congress API', 'PostgreSQL', 'React', 'SQL'],
  },
  {
    id: 4,
    name: 'Destination Slackbot',
    position: 'Solo Developer',
    code: 'https://github.com/srackley/slackbot',
    image: '/images/Slackbot.png',
    description: 'A Slack bot built using NodeJS microservices. It utilizes Wit.ai for natural language processing to provide facts, weather, and current time for a given location.',
    date: 'January 2018',
    tags: ['Node.js', 'Wit.ai', 'Express.js', 'Slack', 'Superagent', 'Websockets', 'Moment', 'Google Geocode API'],
  },
  {
    id: 3,
    name: 'Whiskr',
    position: 'Web Developer',
    demo: 'https://youtu.be/qW5-C7skuU0',
    code: 'https://github.com/srackley/whiskr',
    image: '/images/Whiskr.png',
    description: 'Whiskr is a Tinder-like web app for pairing users with local adoptable pets. Whiskr will streamline your pursuit of a cuddly companion by implementing a swiping mechanism to pair you with local pets.',
    date: 'November 2017 - December 2017',
    tags: ['PetFinder API', 'React', 'Node.js', 'Express.js', 'Sequelize', 'Create-React-App', 'React-Swipe-Card', 'Heroku', 'Nodemailer', 'Animate.CSS'],
  },
  {
    id: 2,
    name: 'Palimpsest',
    position: 'Solo Developer',
    demo: 'https://youtu.be/eP9Sjw48gM4',
    code: 'https://github.com/srackley/stackathon',
    image: '/images/Palimpsest.png',
    description: 'Palimpsest is a prototype for a social e-Reader with the capability to share notes, highlights, and theories with friends who share the same book.',
    date: 'November 2017',
    tags: ['eReader', 'React', 'Firebase', 'Axios', 'ePub', 'Node.js', 'Webpack'],
  },
  {
    id: 1,
    name: 'Cage Match',
    position: 'Web Developer',
    demo: 'https://cage-match.herokuapp.com/',
    code: 'https://github.com/srackley/e-Commerce',
    image: '/images/CageMatch.png',
    description: 'An easy to use, modern e-commerce site with persistent state and user authentification. Cage Match is an e-commerce website for purchasing Nicholas Cage roles.',
    date: 'November 2017',
    tags: ['OAUTH', 'Express.js', 'Node.js', 'Passport', 'React', 'Sequelize', 'Webpack'],
  },
];

const AllProjects = () => (
  <div className="section" style={{ padding: '4vw' }}>
    <Header title="Work" />
    <div className="row">
      {
          data.map(project => (
            <div className="animate fadeInUp two work item" key={project.id}>
              <img src={project.image} alt={`Device display of ${project.name}`} />
              <h2>{project.name}</h2>
              <div>{project.date}</div>
              <div>{project.position}</div>
              <div className="links">
                {project.demo
                ?
                <div className="svg-wrapper">
                <a
                      href={project.demo}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                <svg height="40" width="90" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="40" width="90" />
                    </svg>
                      <div className="text">
                      Demo
                  </div>
                  </a>
                </div>

              :
              null
            }
                  <div className="svg-wrapper" >
                  <a
                  href={project.code}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg height="40" width="90" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="40" width="90" />
                    </svg>
                        <div className="text">
                        Code
                    </div>
                    </a>
                  </div>
              </div>
              <div>
                  {project.description}
                </div>
                <br />
                <div id="tags">{project.tags.join(' | ')}
                </div>
            </div>
          ))
        }
    </div>
  </div>
);

export default AllProjects;
