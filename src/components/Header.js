import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <div>
    <nav>
      <Link to="/" className="homepage">
        Homepage
      </Link>
    </nav>
  </div>
);

export default Header;
