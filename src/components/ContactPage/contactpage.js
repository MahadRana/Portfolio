import React from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import { useRef } from "react";

export const ContactPage = () => {
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95ufx66", // Replace with your EmailJS Service ID
        "template_9dfbdeq", // Replace with your EmailJS Template ID
        refForm.current, 
        "jOFL0N0lsSRxapTFA"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form ref = {refForm}onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-image">
          <img
            src='/images/paper-plane-svgrepo-com.png' // Replace with your image path
            alt="Send Message"
          />
        </div>
      </div>
    </div>
  );
};

