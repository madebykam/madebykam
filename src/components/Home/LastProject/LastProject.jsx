import React from "react";
import weathernow from "../../../assets/wther-now.png";
import tattoobooking from "../../../assets/tattoo-booking.png";
import "./LastProject.css";

const LastProject = () => {
  return (
    <div className="lastproject-container">
      <div className="lastproject">
        <h2>My last projects</h2>
      <div className="lastprojectcard-wrapper">

        <div className="lastprojectcard-box">
          <a
            href="https://tattoo-appointment-manager.netlify.app/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="cardlastproject"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              width: "500px",
              height: "400px",
              borderRadius: "10px",
              justifyContent: "space-between",
              overflow: "hidden",
              margin: "0 auto",
              backgroundColor: "#575757",
              cursor: "pointer",
            }}
          >
            <span>
              A real-world booking app built for local businesses, 
              making it easy for clients to request appointments and owners to manage their schedule.
            </span>
            <img
              src={tattoobooking}
              alt="tattoo-booking-mockup"
              className="mockup"
              style={{
                boxShadow: "0 0 20px rgb(189, 189, 189), 0 0 40px rgb(189, 189, 189), 0 0 60px rgb(189, 189, 189)",
              }}
            />
          </a>
        </div>

        <div className="lastprojectcard-box">
          <a
            href="https://wther-now.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cardlastproject"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              width: "500px",
              height: "400px",
              borderRadius: "10px",
              justifyContent: "space-between",
              overflow: "hidden",
              margin: "0 auto",
              backgroundColor: "#231e5dff",
              cursor: "pointer",
            }}
          >
            <span>
              a modern weather application that provide real-time weather
              information and local time
            </span>
            <img
              src={weathernow}
              alt="weather-now-mockup"
              className="mockup"
              style={{
                boxShadow: "0 0 20px #3C30D0ff, 0 0 40px #3C30D0ff, 0 0 60px #3C30D0ff",
              }}
            />
          </a>
        </div>
        
      </div>

      </div>
      
    </div>
  );
};

export default LastProject;
