import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <Navbar fixedBottom>
      <Nav bsStyle="pills" >
        <NavLink to="/">Home</NavLink>        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
