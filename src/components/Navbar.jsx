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
            <NavLink exact to="/" >
            Home
            </NavLink>
            <NavLink to="/about" >
            About
            </NavLink>
            <NavLink to="/skills" >
            Skills
            </NavLink>
            <NavLink to="/work" >
            Work
            </NavLink>
            <button onClick={this.toggleSocial}>
              Contact
            </button>
          </span>
          <span id="social">
            <a href="http://www.linkedin.com/in/shelbyrackley" rel="noopener noreferrer" target="_blank" >
              <FontAwesome name="linkedin" />
            </a>
            <a href="http://www.github.com/srackley" rel="noopener noreferrer" target="_blank" >
              <FontAwesome name="github" />
            </a>
            <a href="mailto:shelbytrackley@gmail.com" >
              <FontAwesome name="envelope-o" />
            </a>
          </span>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
