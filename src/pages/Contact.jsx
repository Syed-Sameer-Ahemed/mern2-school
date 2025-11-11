import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Get in touch using the details below.</p>

      <div className="mt-4">
        <p><strong>Email:</strong> info@myschool.edu</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Learning Lane, Knowledge City, India</p>
      </div>

      <h4 className="mt-5">Send a Message</h4>
      <form className="col-md-6">
        <input className="form-control mb-3" placeholder="Your Name" required />
        <input className="form-control mb-3" placeholder="Your Email" required />
        <textarea className="form-control mb-3" placeholder="Your Message" rows="4"></textarea>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
