import React from "react";
import "../styles/About.css";
import aboutIMG from "../images/about.jpeg";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          About <span>Us</span>
        </h2>
      </div>
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutIMG} alt="" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore The Difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
