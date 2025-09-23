"use client";
import { useState } from "react";
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
  const [phone, setPhone] = useState(""); // 📌 ערך טלפון
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.target;

    // הכנת הנתונים ל-HubSpot API עם השמות הנכונים
    const data = {
      fields: [
        { name: "firstname", value: form.firstname.value },
        { name: "lastname", value: form.lastname.value },
        { name: "email", value: form.email.value },
        { name: "phone", value: phone }, // 📌 שמירת הטלפון מה-state
        { name: "name", value: form.name.value }, // ✅ Company name
        { name: "eshet_digital", value: form.eshet_digital.value }, // ✅ Services dropdown
        { name: "b", value: form.b.value }, // ✅ Message
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/146946532/096acd9d-2441-4d91-a2a0-0de36128239a",
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
        setPhone(""); // 📌 איפוס שדה טלפון
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

          {/* Phone (עם בחירת מדינה) */}
          <div className="form-group phone-input">
            <PhoneInput
              country={"il"} // ברירת מחדל ישראל
              value={phone}
              onChange={(val) => setPhone(val)}
              inputProps={{
                name: "phone",
                required: true,
              }}
              placeholder="Phone Number*"
            />
            <FaPhone className="icon" />
          </div>

          {/* Company */}
          <div className="form-group">
            <input type="text" name="name" placeholder="Company" />
            <FaBuilding className="icon" />
          </div>

          {/* Services Dropdown */}
          <div className="form-group">
            <select name="eshet_digital" required>
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
              name="b"
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
