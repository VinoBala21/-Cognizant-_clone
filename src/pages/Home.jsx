import React, { useState, useRef } from "react";
import "./Home.css";

import heroImage from "../assets/home.png";
import bgVideo from "../assets/vedio.mp4";

import WellbeingSection from "./WellbeingSection";
import CertificationSection from "./CertificationSection";
import CareersBlogSection from "./CareersBlogSection";
import CommunitySection from "./CommunitySection";
import DriverSection from "./DriverSection";
import CatalystSection from "./CatalystSection";
import CareerJourneySection from "./CareerJourneySection";
import LatestJobsSection from "./LatestJobsSection";
import TalentCommunity from "./TalentCommunitySection";
import FooterSection from "./FooterSection";

function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page-container">

      <section className="container hero-section">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-left">
            <h1 className="hero-title">
              Welcome <br />
              to careers <br />
              at Cognizant
            </h1>

            <p className="hero-subtitle">
              Where you're empowered to combine your passions with our reach to
              engineer a smarter, more connected world.
            </p>

            <div className="watch-video">
              <span>Watch Video</span>
            </div>

            <div className="search-bar-row">
              <input
                type="text"
                placeholder="Search jobs"
                className="pill-input"
              />

              <input
                type="text"
                placeholder="Type location"
                className="pill-input"
              />

              <button className="search-submit-btn" aria-label="Search">
                <span className="outline-triangle"></span>
              </button>            </div>
          </div>

          <div className="col-lg-6 hero-right">
            <img
              src={heroImage}
              alt="Cognizant Careers"
              className="hero-img"
            />
          </div>

        </div>
      </section>

      <section className="video-section-wrapper">

        <video
          ref={videoRef}
          src={bgVideo}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        />

        <button
          className="pause-play-btn-absolute"
          onClick={toggleVideo}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <span className="icon-symbol">{isPlaying ? "❚❚" : "▶"}</span>
        </button>


        <div className="video-content-container">
          <div className="video-text-card">

            <h2 className="card-heading-light">
              For more than 30 years, our entrepreneurial spirit has defined
              Cognizant.
            </h2>

            <p className="card-body-text">
              When we're not advising our clients on the next groundbreaking
              solution, we're improving lives by
              <strong> volunteering </strong>
              in our communities,
              <strong> fostering inclusion </strong>
              through our affinity groups and much more.
            </p>

          </div>
        </div>

      </section>

      <WellbeingSection />
      <CertificationSection />
      <CareersBlogSection />
      <CommunitySection />
      <DriverSection />
      <CatalystSection />
      <CareerJourneySection />
      <LatestJobsSection />
      <TalentCommunity />
      <FooterSection />

      <button
        className="back-to-top-btn"
        onClick={scrollToTop}
      >
        Back to Top
      </button>

    </div>
  );
}

export default Home;