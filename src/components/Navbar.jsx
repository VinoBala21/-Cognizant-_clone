import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 120);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(menu);
    }
  };

  const lifeMenu = [
    "Our culture",
    "Learning and development",
    "Global citizenship",
  ];

  const pathwayMenu = [
    "How we hire",
    "Students and new grads",
    "Alumni",
    "Consulting professionals",
  ];

  return (
    <>
      <header className={`main-header ${isScrolled ? "header-hidden" : ""}`}>
        <nav className="navbar custom-navbar">
          <div className="container-fluid px-lg-5 px-3 d-flex justify-content-between align-items-center">

            <a href="#" className="navbar-brand">
              <img src={logo} alt="Logo" className="brand-logo" />
            </a>

            <div className="desktop-nav-links d-flex align-items-center gap-4">

              <a href="#" className="nav-item-link">
                Jobs
              </a>

              <div className="desktop-dropdown-wrapper">
                <a href="#" className="nav-item-link">
                  Life at Cognizant ▼
                </a>

                <div className="desktop-dropdown-menu">
                  {lifeMenu.map((item, index) => (
                    <a href="#" key={index}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div className="desktop-dropdown-wrapper">
                <a href="#" className="nav-item-link">
                  Pathways to Cognizant ▼
                </a>

                <div className="desktop-dropdown-menu">
                  {pathwayMenu.map((item, index) => (
                    <a href="#" key={index}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#" className="nav-item-link">
                Locations
              </a>

              <a href="#" className="nav-item-link">
                Events
              </a>

              <a href="#" className="nav-item-link">
                Blog
              </a>

            </div>

          </div>
        </nav>
      </header>

      <button
        className={`sticky-hamburger-btn ${isScrolled ? "show-sticky" : ""}`}
        onClick={toggleSideNav}
      >
        ☰
      </button>

      {isSideNavOpen && (
        <div className="sidenav-backdrop" onClick={toggleSideNav}></div>
      )}

      <aside className={`sidenav-drawer ${isSideNavOpen ? "open" : ""}`}>

        <div className="sidenav-header">
          <button className="close-btn" onClick={toggleSideNav}>
            ✕
          </button>
        </div>

        <ul className="sidenav-menu">

          <li>
            <a href="#" className="sidenav-link">
              Jobs
            </a>
          </li>

          <li>

            <button
              className="sidenav-dropdown-btn"
              onClick={() => toggleDropdown("life")}
            >
              Life at Cognizant
            </button>

            {activeDropdown === "life" && (
              <div className="sidenav-submenu">
                {lifeMenu.map((item, index) => (
                  <a href="#" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            )}

          </li>

          <li>

            <button
              className="sidenav-dropdown-btn"
              onClick={() => toggleDropdown("pathways")}
            >
              Pathways to Cognizant
            </button>

            {activeDropdown === "pathways" && (
              <div className="sidenav-submenu">
                {pathwayMenu.map((item, index) => (
                  <a href="#" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            )}

          </li>

          <li>
            <a href="#" className="sidenav-link">
              Locations
            </a>
          </li>

          <li>
            <a href="#" className="sidenav-link">
              Events
            </a>
          </li>

          <li>
            <a href="#" className="sidenav-link">
              Blog
            </a>
          </li>

        </ul>

      </aside>
    </>
  );
}

export default Navbar;