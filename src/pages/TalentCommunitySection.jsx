import React from 'react';
import './TalentCommunitySection.css';

const TalentCommunity = () => {
  return (
    <section className="talent-community-section">
      <div className="talent-card-container">
        <div className="talent-content-box">
          <h2 className="talent-heading">Join our talent community</h2>
          <p className="talent-description">
            Haven’t found the right opportunity yet? Receive the latest updates on job opportunities, recruitment events and company news tailored just for you.
          </p>
          {/* <a href="#signup" className="talent-signup-btn">
            Sign up <span className="right-arrow-icon"></span>
          </a> */}
          <a href="#learn-more" className="accordion-cta-btn">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalentCommunity;