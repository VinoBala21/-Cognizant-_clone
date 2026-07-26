import React, { useState } from "react";
import "./CareerJourneySection.css";

import img1 from "../assets/img4.webp";
import img2 from "../assets/img5.png";
import img3 from "../assets/img6.png";

function CareerJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const journeyData = [
    {
      title: "Students and new grads",
      content:
        "Chances are you're not looking for business as usual. Neither are we. Start your career with our team that cares about you—and your success.",
      image: img1,
    },
    {
      title: "Professionals",
      content:
        "A great workplace thrives on ideas and opportunities. You'll find both at Cognizant. Take initiative, bring your entrepreneurial thinking and grow your career.",
      image: img2,
    },
    {
      title: "Alumni",
      content:
        "Want to make your way back to Cognizant? We welcome you with impactful work and a breadth of career options to take you where you want to go!",
      image: img3,
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const currentImage =
    activeIndex === null
      ? journeyData[0].image
      : journeyData[activeIndex].image;

  return (
    <section className="journey-section-wrapper">
      <div className="journey-container">
        <h2 className="journey-heading">
          Where are you in your career journey?
        </h2>

        <div className="journey-content-grid">

          {/* Left Side - Accordion */}

          <div className="journey-accordion-list">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div className="accordion-header">
                  <h3 className="accordion-title">{item.title}</h3>

                  <button
                    className="accordion-icon-wrapper"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="accordion-icon">
                      {activeIndex === index ? "X" : "+"}
                    </span>
                  </button>
                </div>

                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{item.content}</p>

                    <a
                      href="#learn-more"
                      className="accordion-cta-btn"
                    >
                      Learn more →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          

          <div className="journey-image-wrapper">
            <img
              src={currentImage}
              alt="Career Journey"
              className="journey-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default CareerJourneySection;