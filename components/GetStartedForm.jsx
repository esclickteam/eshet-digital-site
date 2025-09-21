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
import { useRouter } from "next/navigation";
import "./GetStartedForm.css";

export default function GetStartedForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        router.push("/thank-you"); // ✅ מעבר לדף תודה
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
        {/* כותרת + תת כותרת */}
        <h2>Start Your Project</h2>
        <p className="form-subtitle">
          Our team will get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          {/* Full Name */}
          <div className="form-group">
            <input type="text" name="fullName" placeholder="Full Name*" required />
            <FaUser className="icon" />
          </div>

          {/* Email */}
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address*" required />
            <FaEnvelope className="icon" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number*" required />
            <FaPhone className="icon" />
          </div>

          {/* Company */}
          <div className="form-group">
            <input type="text" name="company" placeholder="Company" />
            <FaBuilding className="icon" />
          </div>

          {/* Services Dropdown */}
          <div className="form-group">
            <select name="services" required>
              <option value="">Select a Service*</option>
              <option value="Web Development">Web Development</option>
              <option value="Branding">Branding</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <FaCogs className="icon" />
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
            ></textarea>
            <FaQuestionCircle className="icon" />
          </div>

          {/* Submit Button */}
          <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              <>
                Submit <span className="arrow">➜</span>
              </>
            )}
          </button>
        </form>

        {status === "error" && (
          <p className="error-msg">
            ✖ Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </section>
  );
}
