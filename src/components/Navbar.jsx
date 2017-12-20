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
    (window.scrollY > this.prev)
      ? !isSolid && this.setState({ isSolid: true })
      : isSolid && this.setState({ isSolid: false });

    this.prev = window.scrollY;
  }


  toggleSocial() {
    const social = document.getElementById('social');
    social.classList.toggle('show');
  }

  render() {
    const classSolid = this.state.isSolid ? 'solid' : '';

    return (
      <nav className={`topbar ${classSolid}`}>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <button onClick={this.toggleSocial}> Contact
          </button>
          <span id="social">
            <button><FontAwesome name="linkedin" /></button>
            <button><FontAwesome name="github" /></button>
            <button><FontAwesome name="envelope" /></button>
          </span>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
