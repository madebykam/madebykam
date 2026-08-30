import React, { useEffect, useRef, useState } from "react";
import github from "../../assets/github(G).png";
import minus from "../../assets/minus.png";
import weathernow from "../../assets/wther-now.png";
import planpin from "../../assets/plan-pin.png";
import cinefy from "../../assets/cinefy.png";
import confticketgenerator from "../../assets/conf-tickets-generator.png";
import coffeebean from "../../assets/coffeebean.png";
import ontheroad from "../../assets/ontheroad.png";
import boxer from "../../assets/Boxer.png";
import micasa from "../../assets/Micasa.png";
import aroma from "../../assets/Aroma.png";
import tattoobooking from "../../assets/tattoo-booking.png";
import "./theportfolio.css";

const projects = [
    {
    title: "Tattoo Appointment Manager",
    github: "https://github.com/madebykam/tattoo-appointment-manager",
    live: "https://tattoo-appointment-manager.netlify.app/booking",
    task: "Web Development",
    description:
      "A real-world booking app built for local businesses,making it easy for clients to request appointments and owners to manage their schedule.",
    img: tattoobooking,
    bg: "#575757",
    boxShadow: "none",
    details:
      "I built this project because I wanted to create something that could solve a real problem for many local businesses. The biggest difficulty was working with Firebase, especially structuring the booking data and keeping pending and confirmed appointments in sync. It made me realize where my code and project structure could be improved, and pushed me to find cleaner ways to organize my logic and make the application more reliable.",
  },
  {
    title: "Weather Now",
    github: "https://github.com/CyberBeeDesign/Weather-Now",
    live: "https://wther-now.netlify.app",
    task: "Web Development",
    description:
      "A modern weather application that provides real-time weather and local time based on user location or searched cities.",
    img: weathernow,
    bg: "#231e5dff",
    boxShadow: "0 0 20px #3C30D0ff, 0 0 40px #3C30D0ff, 0 0 60px #3C30D0ff",
    details:
      "I built this project to challenge myself with real-time weather data, clean component structure, and a smoother user experience. Working with the Open-Meteo API taught me how to organize data flow efficiently, manage dynamic units, and keep the interface fast and intuitive. It pushed me to write clearer logic, refine my React workflow, and turn complex information into something simple and enjoyable to use.",
  },
  {
    title: "Plan Pin",
    github: "https://github.com/CyberBeeDesign/PlanPin",
    live: "https://planpin.netlify.app/",
    task: "Design & Development",
    description:
      "A React application that help travelers plan their trips by showing points of interest on an interactive map.",
    img: planpin,
    bg: "#00A1B2",
    boxShadow: "0 0 20px #acd0d4ff, 0 0 40px #acd0d4ff, 0 0 60px #acd0d4ff",
    details:
      "This project is still in progress. After years of traveling, I wanted to build a tool that would make planning easier on the road. Working on it is helping me improve how I manage state, structure features like saved places and itineraries, and design a cleaner, more intuitive experience for travelers.",
  },
  {
    title: "Cinefy",
    github: "https://github.com/CyberBeeDesign/Cinefy",
    live: "https://cinefy-cyberbee.netlify.app/",
    task: "Design & Development",
    description:
      "An application that let the user explore movies and tv shows, providing details, trailers, and recommendations.",
    img: cinefy,
    bg: "#7b3916ff",
    boxShadow: "0 0 20px #FFCF35, 0 0 40px #FFCF35, 0 0 60px #FFCF35",
    details:
      "I built this project to make discovering movies and TV shows easy and enjoyable. It taught me how to fetch and display API data efficiently, structure dynamic components, and create an intuitive interface where users can explore trailers, details, and recommendations seamlessly.",
  },
  {
    title: "Conference tickets generator",
    github: "https://github.com/CyberBeeDesign/Conference-ticket-generator",
    live: "https://conf-tickets-generator.netlify.app/",
    task: "Web Development",
    description:
      "A single-page application that allows users to create personalized conference tickets by uploading a photo and entering their details.",
    img: confticketgenerator,
    bg: "#20015A",
    boxShadow: "0 0 20px #5b17d8ff, 0 0 40px #5b17d8ff, 0 0 60px #5b17d8ff",
    details:
      "I created this project as a fun way to let users design their own conference ticket. While building it, I learned how to guide the user through a smooth, friendly flow—uploading a photo, adding their details, and instantly seeing their personalized ticket appear. It helped me improve how I think about clear interactions and small details that make a simple idea feel enjoyable to use.",
  },
  {
    title: "Coffee Bean",
    github: "https://github.com/CyberBeeDesign/Coffee-Bean",
    live: "https://cb-coffeebean.netlify.app/",
    task: "Design & Development",
    description:
      "a superb website for a coffee shop, designed for customers who want to place their orders online.",
    img: coffeebean,
    bg: "#312502ff",
    boxShadow: "0 0 20px #C8A185, 0 0 40px #C8A185, 0 0 60px #C8A185",
    details:
      "I created this two-page coffee shop website to practice bringing a design to life in a clean and inviting way. Focusing on just the home and contact pages allowed me to refine the essentials—layout, styling, and small interactive touches. Building it helped me improve how I structure pages, create a warm visual atmosphere, and make simple websites feel polished and welcoming.",
  },
   {
    title: "OnTheRoad",
    live: "https://dribbble.com/shots/23031424-Travel-blog-landing-page",
    task: "Web Design",
    description:
      "A travel blog landing page concept designed to immerse visitors in a colorful and adventurous visual experience.",
    img: ontheroad,
    bg: "#2a1901ff",
    boxShadow: "0 0 20px #d78930ff, 0 0 40px #d78930ff, 0 0 60px #d78930ff",
    details:
"I created this design to sharpen my eye for layout, color harmony, and visual storytelling. It helped me practice combining personality-driven illustrations, cohesive color palettes, and strong typography to craft a layout that feels engaging, modern, and easy to navigate."  
},
{
    title: "MICASA",
    live: "https://dribbble.com/shots/23080336-Real-Estate-Agency-Landing-Page",
    task: "Web Design",
    description:
      "A landing page design for a real estate agency showcasing properties and services.",
    img: micasa,
    bg: "#39a5dbff",
    boxShadow: "0 0 20px #95bfd3ff, 0 0 40px #95bfd3ff, 0 0 60px #95bfd3ff",
    details:
"I worked on this design to improve how I present information cleanly and professionally. It helped me practice layout balance, visual hierarchy, and creating a trustworthy look that fits the real estate industry."  
},
{
    title: "Aroma",
    live: "https://dribbble.com/shots/23035047-Italian-Restaurant-Landing-page",
    task: "Web Design",
    description:
      "A landing page design for an Italian restaurant that highlights rich flavors, warm colors, and an inviting dining atmosphere.",
    img: aroma,
    bg: "#b1784dff",
    boxShadow: "0 0 20px #e7ccb8ff, 0 0 40px #e7ccb8ff, 0 0 60px #e7ccb8ff",
    details: 'I designed this project to improve how I balance visuals, spacing, and typography in a food-focused layout. It helped me practice creating a warm, appetizing aesthetic, organizing content clearly, and guiding the user’s attention through images, menus, and call-to-action elements.'
  },
  {
    title: "BOXER",
    live: "https://dribbble.com/shots/24137398-Boxing-Gym",
    task: "Web Development",
    description:
      "A landing page design for a boxing gym offering fitness boxing, kids’ classes, and amateur training.",
    img: boxer,
    bg: "#143A96",
    boxShadow: "0 0 20px #849ad3ff, 0 0 40px #849ad3ff, 0 0 60px #849ad3ff",
    details:
      "I created this design to practice building a strong, high-impact visual style. It helped me work on bold layouts, dynamic typography, and clear section structure to highlight different programs while keeping the page easy to navigate.",
  },
   

];

const theportfolio = () => {
  const cardRefs = useRef([]);
  const [animateArr, setAnimateArr] = useState(projects.map(() => false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateArr((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observers[idx].disconnect();
          }
        },
        { threshold: 0.1 }
      );
    });

    cardRefs.current.forEach((ref, idx) => {
      if (ref) observers[idx].observe(ref);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio">
        {projects.map((project, idx) => (
          <div
            className="portfoliocard-box"
            ref={(el) => (cardRefs.current[idx] = el)}
            key={project.title}
          >
            <div
              className={`portfolio-left${
                animateArr[idx] ? " slide-in-left" : ""
              }`}
            >
              <div className="portfoliocard-title">
                <img src={minus} alt="minus" className="icon-minus" />
                <h3>{project.title}</h3>
                
                {project.github && (
                  <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github" className="icon-github" />
                </a>
                )}
              </div>
              <span className="task">{project.task}</span>
              <p>{project.details}</p>
            </div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-right${
                animateArr[idx] ? " slide-in-right" : ""
              }`}
              style={{ backgroundColor: project.bg }}
            >
              {/*<span>{project.description}</span>*/}
              <img
                src={project.img}
                alt={`${project.title}-mockup`}
                className="mockup"
                style={{
                  boxShadow: project.boxShadow,
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default theportfolio;
