import React, { useEffect, useState } from "react";
import DesignImg from "../../assets/Design-img.png";
import CodeImg from "../../assets/Coding-img.png";
import "./AboutHero.css";

const AboutHero = () => {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setanimate(true), 700);
  }, []);

  return (
    <div className="about-hero">
      <div className={`about-hero-left${animate ? " slide-in-left" : ""}`}>
        <div className="title-about">
          <h1 className="title">about me</h1>
          <h1 className="point">.</h1>
        </div>
        <div className="description">
          <h3>I’m a front-end developer driven by curiosity and creativity.</h3>
          <p>
            I started in 2017 out of necessity and turned it into a passion.
            When I’m not coding, I’m coaching boxing, enjoying time with my
            kids, or exploring a new country.
          </p>
        </div>
      </div>
      <div className={`about-hero-right${animate ? " slide-in-right" : ""}`}>
        <div className="background-img">
          <img src={DesignImg} alt="Design-img" className="design-img" />
          <img src={CodeImg} alt="Code-img" className="code-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
