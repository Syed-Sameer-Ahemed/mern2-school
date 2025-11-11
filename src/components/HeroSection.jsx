import React from "react";

function HeroSection() {
  return (
    <div className="hero text-center bg-light py-5">
      <div className="container">
        <h1 className="fw-bold display-5 text-primary">
          Welcome to MySchool
        </h1>
        <p className="lead mt-3">
          Empowering students with knowledge, creativity, and confidence.
        </p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
