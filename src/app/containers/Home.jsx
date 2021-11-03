import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/containers/Home.css';
import wallpaper from '../assets/static/wallpaperAnime.jpg';

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>Favorite Animes</h1>
      <h3>Store your favorite animes</h3>
      <Link to="/signin">Let's get Started</Link>
    </div>
  );
};

export default Home;
