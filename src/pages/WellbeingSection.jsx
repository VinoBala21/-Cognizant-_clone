import React from 'react';
import './WellbeingSection.css';

const WellbeingSection = () => {
  return (
    <section className="wellbeing-section-wrapper">
      <div className="wellbeing-container">
        <h2 className="wellbeing-title">
          Our commitment to associate wellbeing
        </h2>

        <p className="wellbeing-subtext">
          We care about our people and are committed to helping them stay at their best throughout life’s many journeys.
        </p>

        <p className="wellbeing-description">
          Designed with flexibility in mind, our global Be Well program addresses the holistic needs of our associates and their families, providing the physical, mental and financial support needed to navigate life and work.
        </p>

        <a href="#bewell" className="wellbeing-cta-btn">
          Learn more about our Be Well program
          <span> → </span>
        </a>
      </div>
    </section>
  );
};

export default WellbeingSection;