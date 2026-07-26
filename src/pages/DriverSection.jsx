import React, { useState } from 'react';
import './DriverSection.css';
import driverSeatImg from '../assets/img2.webp';

const DriverSeatSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayClick = () => {
    setIsPlaying(true);

  };

  return (
    <section className="driverseat-section-wrapper">
      <div className="driverseat-container">

        <div className="driverseat-content-wrapper">
          <h2 className="driverseat-title">
            Be in the driver's seat of your journey
          </h2>

          <p className="driverseat-description">
            When it comes to your career, you know what's best for you. Here, you're empowered to chart your own course with us—aligned with your career and life goals.
          </p>
  
          <a href="#esg" className="driverseat-cta-btn">
            <span> Explore our L&D programs</span>
            
            <svg
              className="cta-arrow-svg"
              width="12"
              height="14"
              viewBox="0 0 10 12"
            >
              <polygon points="0,0 10,6 0,12" />
            </svg>
          </a>
        </div>


        <div className="driverseat-media-wrapper">
          <img
            src={driverSeatImg}
            alt="Cognizant Learning and Development"
            className="driverseat-img"
          />
          <button
            className="driverseat-play-btn"
            onClick={handlePlayClick}
            aria-label="Play video"
          >
            <div className="play-triangle"></div>
          </button>
        </div>
      </div>



    </section>
  );
};

export default DriverSeatSection;