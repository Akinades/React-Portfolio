import "./Contact.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dck3317",
        "template_1ayo6dz",
        form.current,
        "nptk_I1CLSzyEe_47"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="clients"></div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            required
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            value="Send"
            className="submitBtn"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Email;
