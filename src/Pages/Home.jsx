import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <p className="subtitle fade-in">#1 Funding page on the web</p>

        <h1 className="main-heading fade-in-up">
          Successful <br />
          fundraisers <br />
          start here
        </h1>

        <div className="categories-container fade-in-delay">
          {[
            {
              name: "Your cause",
              img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=400&fit=crop",
              animation: "your-cause",
            },
            {
              name: "Medical",
              img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop",
              animation: "medical",
            },
            {
              name: "Emergency",
              img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=400&fit=crop",
              animation: "emergency",
            },
            {
              name: "Education",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
              animation: "education",
            },
            {
              name: "Animal",
              img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=400&fit=crop",
              animation: "animal",
            },
            {
              name: "Business",
              img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
              animation: "business",
            },
          ].map((cat, i) => (
            <div key={i} className={`category-circle floating ${cat.animation}`}>
              <div className="circle-glow"></div>
              <img src={cat.img} alt={cat.name} />
              <span className="category-label">{cat.name}</span>
            </div>
          ))}
        </div>

        <button className="cta-button fade-in-up">
          Start with LoveShareCare ❤️
        </button>
      </div>
    </div>
  );
}

export default Home;
