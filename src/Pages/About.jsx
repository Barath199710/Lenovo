import React from "react";
import "../styles/About.css";
function About() {
  return (
    // <div className="page">
      <section className="about-section" id="about">
      <h1>About Us</h1>
      <p className="intro">
        NovaByte is a forward-thinking tech company focused on building
        responsive, innovative, and high-quality digital solutions.
      </p>

      <div className="about-boxes">
        <div className="box">
          <h2>Our Mission</h2>
          <p>
            To empower businesses and individuals with creative, user-friendly,
            and scalable web applications.
          </p>
        </div>

        <div className="box">
          <h2>Our Vision</h2>
          <p>
            Delivering futuristic digital experiences through modern
            technologies and seamless user interfaces.
          </p>
        </div>

        <div className="box">
          <h2>Technologies We Use</h2>
          <p>
            React.js, JavaScript, HTML, CSS, Bootstrap, REST APIs, and modern
            frontend tools.
          </p>
        </div>
      </div>
      
    </section>
    // </div>
  );
}

export default About;