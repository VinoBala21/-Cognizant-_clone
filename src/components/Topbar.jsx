import React, { useState, useRef, useEffect } from "react";

const regions = [
  {
    title: "Americas",
    links: [
      "United States (English)",
      "Canada (French)",
      "Canada (English)",
      "Brazil (Portuguese)",
      "Latin America (Spanish)",
    ],
  },
  {
    title: "India",
    links: ["India (English)"],
  },
  {
    title: "Europe, Middle East and Africa",
    links: [
      "UKI (English)",
      "France (French)",
      "Spain (Spanish)",
      "The Netherlands (Dutch)",
      "Germany (German)",
      "All other countries (English)",
    ],
  },
  {
    title: "Asia Pacific and Japan",
    links: [
      "China (Chinese)",
      "Japan (Japanese)",
      "Philippines (English)",
      "Thailand (Thai)",
      "All other countries (English)",
    ],
  },
];

function TopBar() {
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  const regionRef = useRef(null);

  const toggleRegionMenu = () => {
    setIsRegionOpen(!isRegionOpen);
  };

  useEffect(() => {
    function handleClick(event) {
      if (
        regionRef.current &&
        !regionRef.current.contains(event.target)
      ) {
        setIsRegionOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="bg-light position-relative" ref={regionRef}>
      {/* Top Bar */}

      <div className="container d-flex justify-content-end align-items-center py-2">

        <button
          className="btn btn-link text-dark text-decoration-none me-4"
          onClick={toggleRegionMenu}
        >
          <i className="bi bi-globe me-2"></i>

          Global (English)

          <i
            className={`bi ms-2 ${
              isRegionOpen
                ? "bi-chevron-up"
                : "bi-chevron-down"
            }`}
          ></i>
        </button>

        <button className="btn btn-info rounded-pill text-white me-4">
          Saved Jobs 0
        </button>

        <a href="#" className="text-dark text-decoration-none">
          Join our talent community
        </a>
      </div>

      {/* Region Menu */}

      {isRegionOpen && (
        <div
          className="position-absolute bg-white border shadow w-100"
          style={{
            top: "100%",
            left: "0",
            zIndex: 1000,
          }}
        >
          <div className="container py-4">

            <div className="d-flex align-items-center mb-4">

              <h2 className="fw-bold text-primary me-4">
                Change Region
              </h2>

              <button className="btn btn-info rounded-pill text-white">
                Global Site
              </button>

            </div>

            <div className="row">

              {regions.map((region, index) => (
                <div
                  className="col-md-3 mb-4"
                  key={index}
                >
                  <h5 className="fw-bold text-primary">
                    {region.title}
                  </h5>

                  <ul className="list-unstyled">

                    {region.links.map((link, i) => (
                      <li key={i} className="mb-2">
                        <a
                          href="#"
                          className="text-dark"
                        >
                          {link}
                        </a>
                      </li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;