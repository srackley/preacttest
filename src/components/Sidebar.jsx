import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <Menu
        width="calc(120px + 4vw)"
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={
          <FontAwesome
            name="bars"
            className="menu-button"
          />}
        customCrossIcon={
          <FontAwesome
            name="times"
            className="menu-button"
          />}
      >
        <NavLink
          activeClassName="active"
          id="home"
          className="menu-item"
          to="/"
        >Home
        </NavLink>
        <NavLink
          activeClassName="active"
          id="about"
          className="menu-item"
          to="/about"
        >About
        </NavLink>
        <NavLink
          activeClassName="active"
          id="contact"
          className="menu-item"
          to="/contact"
        >Contact
        </NavLink>
        <NavLink
          activeClassName="active"
          id="projects"
          className="menu-item"
          to="/projects"
        >Projects
        </NavLink>
      </Menu>
    </nav>
  );
}

export default Sidebar;
