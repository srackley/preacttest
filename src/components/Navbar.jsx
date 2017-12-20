import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
    social.classList.toggle('hidden');
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
          <div id="social" className="hidden">
            <button>LinkedIn</button>
            <button>Github</button>
            <button>Email</button>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
