import React, { useState, useEffect } from "react";
import Contactimg from "../../assets/Contact-img.png";
import Ellipseblue from "../../assets/Ellipseblue.png";
import EllipseYellow from "../../assets/EllipseYellow.png";
import UnionBlue from "../../assets/UnionBlue.png";
import UnionGrey from "../../assets/UnionGrey.png";
import "./Herocontact.css";

const Herocontact = () => {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setanimate(true), 700);
  }, []);

  return (
    <div className="contact-hero">
      <div className={`contact-hero-left${animate ? " slide-in-left" : ""}`}>
        <div className="title-contact">
          <h1 className="title">contact</h1>
          <h1 className="point">.</h1>
        </div>
        <div className="description-contact">
          <p>Let’s work together</p>
        </div>
      </div>
      <div className="contact-hero-right">
        <img src={Ellipseblue} alt="eclipse blue" className="ellipseblue" />

        <img
          src={Contactimg}
          alt="portfolioimg"
          className={`contact-img${animate ? " slide-in-right" : ""}`}
        />
        <img src={UnionGrey} alt="union grey" className="uniongrey" />
        <img
          src={EllipseYellow}
          alt="eclipse yellow"
          className="ellipseyellow"
        />
        <img src={UnionBlue} alt="union blue" className="unionblue" />

        <img
          src={EllipseYellow}
          alt="eclipse yellow"
          className="ellipseyellowbig"
        />
      </div>
    </div>
  );
};

export default Herocontact;
