import React from 'react';
import './CareersBlogSection.css';
import blogCollageImg from '../assets/blog/img1.webp';

const CareersBlogSection = () => {
  return (
    <section className="blog-section-wrapper">
      <div className="blog-container">

        {/* Left Side: Single Collage Image Banner */}
        <div className="blog-image-wrapper">
          <img
            src={blogCollageImg}
            alt="Cognizant Careers Blog Associates"
            className="blog-img"
          />
        </div>

        {/* Right Side: Text Content & CTA Button */}
        <div className="blog-content-wrapper">
          <h2 className="blog-title">
            Cognizant<br />careers blog
          </h2>

          <p className="blog-description">
            Discover life at Cognizant through the eyes of our associates who shape and experience our vibrant culture.
          </p>

          <a href="#blogs" className="blog-cta-btn">
            <span>View all blogs</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CareersBlogSection;