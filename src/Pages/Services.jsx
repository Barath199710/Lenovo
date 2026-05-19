import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <h1>Our Services</h1>
      <div className="services-boxes">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            We build scalable, responsive websites with clean code and modern
            frameworks to ensure performance and reliability.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Creative, user‑centric designs that blend aesthetics with
            functionality, delivering seamless digital experiences.
          </p>
        </div>

        <div className="service-card">
          <h2>API Integration</h2>
          <p>
            Smooth backend connectivity with REST APIs and third‑party services,
            enabling powerful features and real‑time data flow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
