import React, { useState } from "react";

function Admissions() {
  const [form, setForm] = useState({ name: "", email: "", grade: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your admission request has been submitted.`);
    setForm({ name: "", email: "", grade: "" });
  };

  return (
    <div className="container mt-5">
      <h2>Admission Form</h2>
      <p>Fill out the form below to apply for admission to MySchool.</p>

      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade Applying For"
          value={form.grade}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <button className="btn btn-success w-100">Submit Application</button>
      </form>
    </div>
  );
}

export default Admissions;
