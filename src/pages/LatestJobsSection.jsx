import React, { useState, useRef } from 'react';
import './LatestJobsSection.css';
import bgVideo from '../assets/vedio1.mp4';

const LatestJobs = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jobs = [
    { title: "Java Developer (Connected Services)", location: "Dearborn, Michigan, United States", category: "Digital" },
    { title: "Field Services Engineer - Desktop", location: "Cleveland, North Carolina, United States", category: "IT Infrastructure" },
    { title: "Lead Manager", location: "Monterrey,NL-AvDavidAlfaro, Nuevo Leon, Mexico", category: "Sales and Marketing" },
    { title: "Engagement Delivery Lead", location: "SanFrancisco,CA-Mission St, California, United States", category: "Digital" },
    { title: "Senior Java Backend Developer", location: "Sunnyvale, Texas, United States", category: "Digital" }
  ];

  return (
    <section className="latest-jobs-section">
      <video ref={videoRef} autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-overlay"></div>

      <button className="pause-play-btn-absolute" onClick={togglePlayPause} aria-label="Toggle video">
        <span className="icon-symbol">{isPlaying ? "❚❚" : "▶"}</span>
      </button>

      <div className="content-wrapper">
        <div className="header-container">
          <span className="sub-heading">Latest jobs</span>
          <h2 className="main-heading">A rewarding career awaits</h2>
        </div>

        <div className="jobs-list">
          {jobs.map((job, idx) => (
            <div className="job-card-item" key={idx}>
              <div className="job-info-box">
                <h3 className="job-title-text">{job.title}</h3>
                <div className="job-tags-group">
                  <span className="location-tag">{job.location}</span>
                  <span className="category-tag">{job.category}</span>
                </div>
              </div>
              <button className="heart-icon-btn" aria-label="Save Job">
                ♡
              </button>
            </div>
          ))}
        </div>

        <div className="browse-container">

          <a href="#all-jobs" className="browse-jobs-btn">
            Browse all jobs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;