import React, { useState } from "react";
import data from "../../data.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitted(false);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      {isSubmitted ? (
        <div className="confirmation-card">
          <div className="confirmation-content">
            <h2>Success!</h2>
            <p>
              Hello <strong>{name}</strong>, your message has been sent.
            </p>
            <p>
              <strong>{data.name}</strong> will contact you soon.
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"/>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Enter your phone number"/>
          </div>

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
