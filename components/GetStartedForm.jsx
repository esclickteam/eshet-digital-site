"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./GetStartedForm.css";

export default function GetStartedForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LdIndQrAAAAAHKdTiHWz6ep8FShGPF08g7zIRZJ";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const isValidEmail = (email) => {
    const blockedDomains = ["yandex.com", "mail.ru", "tempmail", "mailinator"];
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;
    if (blockedDomains.some((d) => domain.includes(d))) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidUSPhone = (phone) => {
    const regex = /^\+1\d{10,}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.target;

    // ✅ Honeypot
    if (form.website_url_2.value) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // ✅ reCAPTCHA
    const token = await window.grecaptcha.execute(
      "6LdIndQrAAAAAHKdTiHWz6ep8FShGPF08g7zIRZJ",
      { action: "submit" }
    );

    if (!token) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // ✅ ולידציות
    if (!isValidEmail(form.email.value)) {
      setStatus("invalid_email");
      setLoading(false);
      return;
    }
    if (!isValidUSPhone(phone)) {
      setStatus("invalid_phone");
      setLoading(false);
      return;
    }

    // ✅ נתונים ל-HubSpot (Internal names!)
    const data = {
  fields: [
    { name: "firstname", value: form.firstname.value },
    { name: "lastname", value: form.lastname.value },
    { name: "email", value: form.email.value },
    { name: "phone", value: phone },
    { name: "name", value: form.company.value },          // Company name
    { name: "eshet_digital", value: form.service_type.value }, // Services dropdown
    { name: "b", value: form.message.value },             // Message
  ],
  context: {
    pageUri: window.location.href,
    pageName: document.title,
  },
};

    try {
      const res = await fetch(
        "https://api.hsforms.eu/submissions/v3/integration/submit/146946532/096acd9d-2441-4d91-a2a0-0de36128239a",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        form.reset();
        setPhone("");
        router.push("/thank-you");
      } else {
        const errMsg = await res.json();
        console.error("HubSpot Error:", errMsg);
        setStatus("error");
      }
    } catch (err) {
      console.error("Request failed:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="get-started">
      <div className="form-container">
        <h2>Start Your Project</h2>
        <p className="form-subtitle">
          Our team will get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="firstname" placeholder="First Name*" required />
            <FaUser className="icon" />
          </div>

          <div className="form-group">
            <input type="text" name="lastname" placeholder="Last Name*" required />
            <FaUser className="icon" />
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address*" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="form-group phone-input">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(val) => setPhone("+" + val)}
              inputProps={{ name: "phone", required: true }}
              placeholder="Phone Number*"
            />
            <FaPhone className="icon" />
          </div>

          <div className="form-group">
            <input type="text" name="company" placeholder="Company" />
            <FaBuilding className="icon" />
          </div>

          <div className="form-group">
            <select name="service_type" required>
              <option value="">Select a Service*</option>
              <option value="Web Development">Web Development</option>
              <option value="Branding">Branding</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <FaCogs className="icon" />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="How can we help you?" rows="4"></textarea>
            <FaQuestionCircle className="icon" />
          </div>

          {/* Honeypot */}
          <input type="text" name="website_url_2" style={{ display: "none" }} />

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

        {status === "invalid_email" && (
          <p className="error-msg">✖ Please enter a valid business email.</p>
        )}
        {status === "invalid_phone" && (
          <p className="error-msg">✖ Please enter a valid US phone number (+1).</p>
        )}
        {status === "error" && (
          <p className="error-msg">
            ✖ Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </section>
  );
}
