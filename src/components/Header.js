import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <div>
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/company">Company</Link>
      <Link to="/companydetails">Company Details</Link>
    </nav>
  </div>
);

export default Header;
