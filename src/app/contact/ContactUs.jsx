"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";
import "./ContactUs.css";

export default function ContactUs() {
  const [status, setStatus] = useState(""); // "" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzawewp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* צד שמאל – טקסט + אימייל בלבד */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Got a question, project idea, or just want to say hi?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="details">
            <div className="detail-item">
              <strong>✉️ Email:</strong> hello@eshetdigital.com
            </div>
          </div>
        </div>

        {/* צד ימין – טופס עם אייקונים */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Full Name*" required />
              <FaUser className="icon" />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address*" required />
              <FaEnvelope className="icon" />
            </div>

            <div className="form-group">
              <input type="text" name="company" placeholder="Company" />
              <FaBuilding className="icon" />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="services"
                placeholder="Services you are interested in*"
                required
              />
              <FaCogs className="icon" />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="How can we help you?"></textarea>
              <FaQuestionCircle className="icon" />
            </div>

            <button type="submit" className="btn-primary">
              Submit <span className="arrow">➜</span>
            </button>

            {status === "success" && (
              <p className="form-status success">
                ✔ Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                ✖ Oops! Something went wrong, please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
