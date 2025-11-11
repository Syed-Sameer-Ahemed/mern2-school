import React from "react";

function Courses() {
  const courses = [
    { name: "Mathematics", details: "Advanced math concepts and problem-solving skills." },
    { name: "Science", details: "Hands-on learning with lab experiments and projects." },
    { name: "English", details: "Improving communication, grammar, and literature knowledge." },
    { name: "Computer Science", details: "Coding, algorithms, and digital creativity." },
    { name: "Art & Music", details: "Fostering creativity and imagination through art." },
  ];

  return (
    <div className="container mt-5">
      <h2>Courses Offered</h2>
      <div className="row">
        {courses.map((c, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{c.name}</h5>
                <p className="card-text">{c.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
