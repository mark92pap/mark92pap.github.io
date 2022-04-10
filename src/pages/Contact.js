import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const SubmitMessage = (e) => {
    e.preventDefault();
    const serviceId = "service_btvkaeh";
    const templateId = "template_kc9yr51";
    const pKey = "3NY9gnqjmxWsUlN4A";

    console.log(name, email, company, message);
    emailjs
      .sendForm(serviceId, templateId, e.target, pKey)
      .then((r) => {
        alert("sent");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="contact">
      <div className="container grid">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>Want to send me a message?</p>
          <p>Fill in the form and I will come back to you ASAP!</p>
        </div>
        <div className="contact-form card">
          <h2>Fill in your message</h2>
          <form onSubmit={SubmitMessage}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control ">
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
