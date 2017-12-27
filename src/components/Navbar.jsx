import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isSolid: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { isSolid } = this.state;
    (window.scrollY > 20)
      ? !isSolid && this.setState({ isSolid: true })
      : isSolid && this.setState({ isSolid: false });
  }


  toggleSocial() {
    const social = document.getElementById('social');
    social.classList.toggle('show');
  }

  render() {
    const classSolid = this.state.isSolid ? 'solid' : '';

    return (
      <nav className={`${classSolid}`}>
        <ul>
          <NavLink to="/" id="logo" className="left animate fadeInDown one">
          Shelby Rackley
          </NavLink>
          <span className="right animate fadeInDown one">
            <NavLink to="/about" >
            About
            </NavLink>
            <NavLink to="/services" >
            Skills
            </NavLink>
            <NavLink to="/projects" >
            Work
            </NavLink>
            <button onClick={this.toggleSocial}>
            Contact
            </button>
          </span>
          <span id="social">
            <a href="http://www.linkedin.com/in/shelbyrackley">
              <button>
                <FontAwesome name="linkedin" />
              </button>
            </a>
            <a href="http://www.github.com/srackley">
              <button>
                <FontAwesome name="github" />
              </button>
            </a>
            <a href="mailto:shelbytrackley@gmail.com">
              <button>
                <FontAwesome name="envelope" />
              </button>
            </a>
          </span>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
