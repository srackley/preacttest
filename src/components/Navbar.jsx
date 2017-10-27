import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const Navbar = () => (
  <div>
    <Nav bsStyle="pills">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/services">Services</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Nav>
  </div>
);

export default Navbar;
