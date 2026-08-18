import React, { useEffect, useState } from "react";
import Portfolioimg from "../../assets/Portfolio-hero.png";
import "./Heroportfolio.css";

const Heroportfolio = () => {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setanimate(true), 700);
  }, []);

  return (
    <div className="portfolio-hero">
      <div className={`portfolio-hero-left${animate ? " slide-in-left" : ""}`}>

          <div className="title-portfolio">
            <h1 className="title">portfolio</h1>
            <h1 className="point">.</h1>
          </div>
        <div className="description-portfolio">
          <p>
            Check out the projects I've built to sharpen my skills. Each one is
            focused on clean design, responsive layouts, and maintainable code.
          </p>
        </div>
      </div>
      <div
        className={`portfolio-hero-right${animate ? " slide-in-right" : ""}`}
      >
        <img src={Portfolioimg} alt="portfolioimg" className="porfolio-img" />
      </div>
    </div>
  );
};

export default Heroportfolio;
