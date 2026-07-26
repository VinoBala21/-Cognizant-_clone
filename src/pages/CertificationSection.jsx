import React from 'react';
import './CertificationSection.css';
import certBanner from "../assets/imag2.webp";

const CertificationSection = () => {
  return (
    <section className="cert-section-wrapper">
      <div className="cert-container">
        <div className="cert-image-wrapper">
          <img
            src={certBanner}
            alt="Great Place To Work Certified"
            className="cert-img"
          />
        </div>

        <div className="cert-content-wrapper">
          <h2 className="cert-title">
            We’re Great Place to Work® certified!
          </h2>

          <p className="cert-description">
            Our people have spoken. At Cognizant, you’ll find more than a job—you’ll find meaningful work, opportunities to build the career you want and teammates who help you thrive.
          </p>

          <a href="#culture" className="cert-cta-btn">
            <span>Discover the Cognizant culture</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;