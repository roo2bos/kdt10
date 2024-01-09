import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
