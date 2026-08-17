import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/MyImage.jpeg';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container" role="status" aria-live="polite">
        <div className="loader" aria-label="Loading content"></div>
        <p className="loader-text">Loading portfolio details...</p>
      </div>
    );
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Sai Teja Aluvala</h1>
          <p className="hero-subtitle">B.Tech Computer Science Student, NIT Warangal</p>
          <p className="hero-description">
            Building reliable backend systems and full stack web applications, with a strong interest in
            database design and competitive programming.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src={profileImg} 
            alt="Sai Teja, Backend & Full-Stack Developer at NIT Warangal"
            className="hero-profile-img"
          />
        </div>
      </div>
    </section>
  );
}
