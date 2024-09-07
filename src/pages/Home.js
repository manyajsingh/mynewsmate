import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="app-name">MyNewsMate</h1>
        <p className="app-description">
          Your personal news buddy, reading the latest updates tailored just for you, anytime, anywhere.
        </p>
        <Link to="/news">
          <button className="watch-now-btn">Watch Now</button>
        </Link>
      </div>
      <div className="avatar-image">
        <img src="/avatar.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
