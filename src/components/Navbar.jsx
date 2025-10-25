import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./MegaNavbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  // 🔹 Scroll handler for "Our Work" section
  const handleWorkLinkClick = (sectionId) => {
    navigate(`/ourwork#${sectionId}`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // 🔹 Scroll handler for "About Us" section
  const handleAboutLinkClick = (sectionId) => {
    navigate(`/about#${sectionId}`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-logo">LoveCareShare</span>

        <ul className="nav-list">
          {/* ================= Home ================= */}
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          {/* ================= Our Work Dropdown ================= */}
          <li
      className="nav-item dropdown"
      onMouseEnter={() => setOpen("ourwork")}
      onMouseLeave={() => setOpen(null)}
    >
      <button className="nav-link">
        Our Work <span className="arrow">▾</span>
      </button>

      {open === "ourwork" && (
        <div className="mega-dropdown">
          {/* Header */}
          <div className="mega-header">
            <span className="mega-icon">❤️</span>
            <span className="mega-title">Discover what we do</span>
          </div>

          {/* Columns */}
          <div className="mega-columns">
            {/* Left Column */}
            <div className="mega-col">
              <div className="mega-item">
                <Link
                  to="/ourwork#event1"
                  onClick={() => handleWorkLinkClick("purpose")}
                  className="mega-btn"
                >
                  Our Purpose
                </Link>
              </div>

              <div className="mega-item">
                <Link
                  to="/ourwork#event2"
                  onClick={() => handleWorkLinkClick("strength")}
                  className="mega-btn"
                >
                  Our Strength
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="mega-col">
              <div className="mega-item">
                <Link
                  to="/ourwork#event3"
                  onClick={() => handleWorkLinkClick("programs")}
                  className="mega-btn"
                >
                  Our Program
                </Link>
              </div>

              <div className="mega-item">
                <Link
                  to="/ourwork#event4"
                  onClick={() => handleWorkLinkClick("approach")}
                  className="mega-btn"
                >
                  Our Approach
                </Link>
              </div>

              <div className="mega-item">
                <Link
                  to="/ourwork#event5"
                  onClick={() => handleWorkLinkClick("event3")}
                  className="mega-btn"
                >
                  Book Donation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>

          {/* ================= Get Involved Dropdown ================= */}
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setOpen("involved")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="nav-link" type="button">
              Get Involved <span className="arrow">▾</span>
            </button>

            {open === "involved" && (
              <div className="mega-dropdown">
                <div className="mega-header">
                  <span className="mega-icon">🤝</span>
                  <span className="mega-title">
                    Ways to participate and make an impact
                  </span>
                </div>

                <div className="mega-actions-row">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf8f_kifjoDLYBbeoAq1cJsC_cFgoh9LaAtyEEtLz23krkzdQ/viewform"
                    className="mega-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sponsorship
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfVVom1i_ddQSh6l2X92s-c6vw0XPVfAWAxiizZ74_IYjX5fg/viewform"
                    className="mega-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Partnership
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfEA1Df0bI3mNOnlHvuNtiquCHgee5ccLfUMhpEskn4AsLyVA/viewform"
                    className="mega-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Volunteer
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* ================= Right Side Navigation ================= */}
      <ul className="nav-list nav-right">
        {/* About Us Dropdown — SEPARATE NOW */}
        <li
          className="nav-item dropdown"
          onMouseEnter={() => setOpen("about")}
          onMouseLeave={() => setOpen(null)}
        >
          <button className="nav-link" type="button">
            About Us <span className="arrow">▾</span>
          </button>

          {open === "about" && (
            <div className="mega-dropdown">
              <div className="mega-header">
                <span className="mega-icon">📖</span>
                <span className="mega-title">
                  Learn about our mission, vision, and values
                </span>
              </div>

              <div className="mega-actions-row">
                <button
                  onClick={() => handleAboutLinkClick("ourStory")}
                  className="mega-btn"
                >
                  Our Story
                </button>
                <button
                  onClick={() => handleAboutLinkClick("gen")}
                  className="mega-btn"
                >
                  Genesis
                </button>
                <button
                  onClick={() => handleAboutLinkClick("Mission")}
                  className="mega-btn"
                >
                  Mission
                </button>
                <button
                  onClick={() => handleAboutLinkClick("Vision")}
                  className="mega-btn"
                >
                  Vision
                </button>
                <button
                  onClick={() => handleAboutLinkClick("Belief")}
                  className="mega-btn"
                >
                  Belief
                </button>
                <button
                  onClick={() => handleAboutLinkClick("CoreValues")}
                  className="mega-btn"
                >
                  Core Values
                </button>
              </div>
            </div>
          )}
        </li>

        {/* Other Static Links */}
        <li className="nav-item">
          <a href="#signin" className="nav-link">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a href="#start" className="nav-link nav-cta">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
