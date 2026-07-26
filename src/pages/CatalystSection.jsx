import React from 'react';
import './CatalystSection.css';
import catalystImg from '../assets/img3.webp';

const CatalystSection = () => {
  return (
    <section className="catalyst-section-wrapper">
      <div className="catalyst-container">

        <div className="catalyst-image-wrapper">
          <img
            src={catalystImg}
            alt="Cognizant employees engaging in community volunteering"
            className="catalyst-img"
          />
        </div>

        <div className="catalyst-content-wrapper">
          <h2 className="catalyst-title">
            Be a catalyst for change
          </h2>

          <p className="catalyst-description">
            Our people combine their passions with Cognizant’s reach to make a lasting impact in climate, technology, education, inclusion and more.
          </p>

          <a href="#esg" className="catalyst-cta-btn">
            <span>Explore our ESG initiatives</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalystSection;