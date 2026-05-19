import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="hero">
        <h1>Welcome to NovaByte</h1>
        <p>
          We transform ideas into powerful digital experiences, combining
          creativity with modern technology to help brands thrive online.
        </p>
        <button className="cta-btn">Explore Services</button>
      </div>

      <div className="features">
        <div className="feature-box">
          <h2>Modern Design</h2>
          <p>
            Sleek, intuitive interfaces built to captivate users and reflect
            your brand’s unique identity.
          </p>
        </div>

        <div className="feature-box">
          <h2>Fast Performance</h2>
          <p>
            Optimized applications that deliver lightning‑quick responses and
            seamless navigation across platforms.
          </p>
        </div>

        <div className="feature-box">
          <h2>Responsive Layout</h2>
          <p>
            Adaptive designs that ensure flawless functionality on mobile,
            tablet, and desktop devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
