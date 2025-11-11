import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

function Home() {
  const features = [
    {
      title: "Smart Learning",
      description: "Interactive digital classes that make learning fun and easy."
    },
    {
      title: "Qualified Teachers",
      description: "Experienced and dedicated staff guiding students toward success."
    },
    {
      title: "Sports & Activities",
      description: "All-round development through sports, art, and cultural events."
    },
  ];

  return (
    <>
      <HeroSection />
      <div className="container mt-5 text-center">
        <h2 className="text-primary mb-4">Why Choose MySchool?</h2>
        <div className="row">
          {features.map((f, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <Card title={f.title} description={f.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
