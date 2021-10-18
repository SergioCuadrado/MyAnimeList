import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        MyAnimeList
      </Link>
      <div className="header__menu">
        <ul className="">
          <li>
            <Link to="/signin" className="header__list">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="header__list">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/logout" className="header__list">
              Logout
            </Link>
          </li>
          <li>
            <Link to="/api/anime" className="header__list">
              List of my Animes
            </Link>
          </li>
          <li>
            <Link to="/anime" className="header__list">
              List of Animes
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
