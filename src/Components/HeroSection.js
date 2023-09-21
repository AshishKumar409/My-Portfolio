import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Hello!,I'm Ashish 👋 </h1>
      <p>
        I'm a frontend developer with 1.7 years of experience, including a stint
        at Tech Mahindra where I collaborated with renowned clients. My
        expertise lies in Angular 14, along with proficiency in HTML, CSS,
        ReactJS, Git, and Node.js. I'm passionate about crafting seamless user
        experiences and pushing the boundaries of frontend development.
      </p>
    </div>
  );
}

export default HeroSection;
