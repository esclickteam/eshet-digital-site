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

    // הכנת הנתונים ל-HubSpot API
    const data = {
      fields: [
        { name: "firstname", value: form.firstname.value },
        { name: "lastname", value: form.lastname.value },
        { name: "email", value: form.email.value },
        { name: "phone", value: form.phone.value },
        { name: "company", value: form.company.value },
        { name: "services", value: form.services.value },
        { name: "message", value: form.message.value },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/146946532/096acd9d-2441-4d91-a2a0-0de36128239a", // ✅ PortalId + FormId שלך
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
          {/* First Name */}
          <div className="form-group">
            <input
              type="text"
              name="firstname"
              placeholder="First Name*"
              required
            />
            <FaUser className="icon" />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name*"
              required
            />
            <FaUser className="icon" />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
            />
            <FaEnvelope className="icon" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              required
            />
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
          <button
            type="submit"
            className={`submit-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
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
