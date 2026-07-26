import React from 'react';
import './CommunitySection.css';
import communityImg from '../assets/img1.webp';

const CommunitySection = () => {
  return (
    <section className="community-section-wrapper">
      <div className="community-container">

        <div className="community-media-wrapper">
          <img
            src={communityImg}
            alt="Cognizant employees working together"
            className="community-img"
          />
          <button
            className="video-play-btn"
            aria-label="Play video"
          >
            <div className="play-triangle"></div>
          </button>
        </div>

        <div className="community-content-wrapper">
          <h2 className="community-title">
            A community where everyone can thrive
          </h2>

          <p className="community-description">
            We’re focused on building an inclusive environment where everyone feels welcomed, heard and celebrated.
          </p>

          <a href="#action" className="community-cta-btn">
            <span>See our culture in action</span>
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CommunitySection;