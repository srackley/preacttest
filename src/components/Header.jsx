import React from 'react';
import { PageHeader } from 'react-bootstrap';

const Header = ({ title }) => (
  <div>
    <PageHeader>{title}</PageHeader>
  </div>
);

export default Header;
