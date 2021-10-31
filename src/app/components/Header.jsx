import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import ghost from '../assets/static/iconsFideos.png';

const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const Header = () => {
  const [user, setUser] = useState({});

  // Know if a user is logged in and get the user.
  useEffect(() => {
    fetch('/getuser')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error.message));
  }, ['/getuser']);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={ghost} alt="" />
        MyAnimeList
      </Link>
      <div className="header__menu">
        <ul className="">
          {Object.keys(user).length > 0 ? (
            <>
              <li>
                <a href="/logout">Logout</a>
              </li>
              <li>
                <Link to="/animelist" className="header__list">
                  List of my Animes
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
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

/* 
<header className="header">
      <Link to="/" className="header__logo">
        <img src={ghost} alt="" />
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
            <a href="/logout">Logout</a>
            {/* <Link to="/logout" className="header__list">
              Logout
            </Link> }
            </li>
            <li>
              <Link to="/animelist" className="header__list">
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
*/
