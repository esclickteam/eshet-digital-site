"use client";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";
import { useRouter } from "next/navigation";  // ✅ נוסיף
import "./GetStartedForm.css";

export default function GetStartedForm() {
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ נוסיף ראוטר

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzawewp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        // ✅ במקום הודעת success → מעבר ל־Thank You Page
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="get-started">
      <div className="form-container">
        <h2>Get Started</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="fullName" placeholder="Full Name*" required />
            <FaUser className="icon" />
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address*" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number*" required />
            <FaPhone className="icon" />
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
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
            ></textarea>
            <FaQuestionCircle className="icon" />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"} <span className="arrow">➜</span>
          </button>
        </form>

        {status === "error" && (
          <p className="error-msg">✖ Oops! Something went wrong, please try again.</p>
        )}
      </div>
    </section>
  );
}
