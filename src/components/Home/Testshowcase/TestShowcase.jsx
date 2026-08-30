import React from "react";
import tattooMockup from "../../../assets/tattoo-booking-mockup.png"
import "./TestShowcase.css";

const TestShowcase = () => {
  return (
 <article class="portfolio-card">
  
  <div class="card-media">
    <img src={tattooMockup} alt="Tattoo Studio Appointment Manager preview" />
  </div>

  <div class="card-content">
    <span class="project-tag">Full-Stack Web App</span>
    <h2>Tattoo Studio Appointment Manager</h2>
    
    <p class="project-summary">
      A dual-interface booking system built to eliminate DM scheduling chaos and give tattoo studio owners total control over their calendar[cite: 2, 3].
    </p>

    <div class="interface-highlights">
      <div class="highlight-item">
        <strong>📱 Client View:</strong> Simple mobile form to select dates, request custom sessions, and submit tattoo details[cite: 2, 3].
      </div>
      <div class="highlight-item">
        <strong>💻 Owner View:</strong> Real-time dashboard with weekly/monthly calendar views to accept or manage bookings[cite: 2].
      </div>
    </div>

    <div class="tech-pills">
      <span>React</span>
      <span>Firebase</span>
      <span>Vite</span>
      <span>JavaScript</span>
    </div>

    <div class="card-actions">
      <a href="https://tattoo-appointment-manager.netlify.app/booking" target="_blank" class="btn-primary">Live Demo →</a>
      <a href="https://github.com/madebykam/tattoo-appointment-manager" target="_blank" class="btn-secondary">GitHub</a>
    </div>
  </div>
</article>
  );
};

export default TestShowcase;
