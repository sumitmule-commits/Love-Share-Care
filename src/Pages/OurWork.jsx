import React, { useEffect } from "react";
import "./OurWork.css";

const OurWork = () => {
  // Smooth scroll whenever hash (like #purpose) changes
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          // Delay ensures DOM is ready
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <div className="ourwork-container container">
      {/* ============ OUR PURPOSE ============ */}
      <div className="row" id="purpose">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Our Purpose</h2>
          <p>
            Love Care Share Foundation is a nonprofit organization founded with
            the belief that small acts of kindness can lead to big changes in
            society. Our purpose is to provide education, healthcare, and basic
            necessities to underprivileged individuals, while spreading love and
            compassion.
          </p>
        </div>
      </div>

      {/* ============ OUR STRENGTH ============ */}
      <div className="row" id="strength">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">What Makes Us Strong</h2>
          <p>
            The strength of our foundation lies in our volunteers, supporters,
            and the unity of people who believe in humanity above all. Together,
            we bring positive impact through our programs and community-driven
            initiatives.
          </p>
        </div>
      </div>

      {/* ============ OUR APPROACH ============ */}
      <div className="row" id="approach">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Our Approach</h2>
          <p>
            We work directly with local communities to understand their needs
            and design initiatives that create sustainable and measurable
            results. From awareness campaigns to donation drives, we take
            actionable steps toward a better tomorrow.
          </p>
        </div>
      </div>

      {/* ============ OUR PROGRAMS ============ */}
      <div className="row" id="programs">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Our Programs</h2>
          <p>
            Over the years, Love Care Share Foundation has organized multiple
            events like blood donation camps, book drives, and celebrations with
            children, all aimed at spreading happiness and awareness.
          </p>
        </div>
      </div>

      {/* ============ EVENT SECTIONS ============ */}
      <div className="event-section">
        <div className="event" id="event1">
          <h3 className="event-title">Happiness With The Little Ones</h3>
          <p>
            Sharing smiles and gifts with orphanage children to make them feel
            special and loved.
          </p>
          <a href="Event1" className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event2">
          <h3 className="event-title">Jal Daan</h3>
          <p>
            A water distribution campaign to serve travelers and laborers during
            hot summers.
          </p>
          <a href="Event2" className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event3">
          <h3 className="event-title">Book Donation</h3>
          <p>
            Donating educational materials to students in need to encourage
            learning.
          </p>
          <a href="Event3" className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event4">
          <h3 className="event-title">Cloths Donation</h3>
          <p>
            Collecting and distributing clothes to the underprivileged families
            in rural areas.
          </p>
          <a href="Event4" className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event5">
          <h3 className="event-title">Anand Melava</h3>
          <p>
            A fun fair organized for children to enjoy, learn, and experience
            joy together.
          </p>
          <a href="Event5" className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event6">
          <h3 className="event-title">Blood Donation Camp</h3>
          <p>
            Encouraging blood donation to save lives and create awareness among
            youth.
          </p>
          <a href="Event6." className="gallery-link">
            View Gallery
          </a>
        </div>

        <div className="event" id="event7">
          <h3 className="event-title">Celebration With Little Ones</h3>
          <p>
            Spending quality time with kids at orphanages, distributing gifts
            and spreading happiness.
          </p>
          <a href="Event7" className="gallery-link">
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
