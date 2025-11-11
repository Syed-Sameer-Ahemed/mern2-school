import React from "react";

function Teachers() {
  const teachers = [
    { name: "Mr. Sharma", subject: "Mathematics" },
    { name: "Ms. Verma", subject: "Science" },
    { name: "Mrs. Iyer", subject: "English" },
    { name: "Mr. Singh", subject: "Computer Science" },
  ];

  return (
    <div className="container mt-5">
      <h2>Meet Our Teachers</h2>
      <div className="row">
        {teachers.map((t, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t.name}</h5>
                <p className="card-text text-muted">{t.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
