"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./GetStartedForm.css";

export default function GetStartedForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("us"); // ברירת מחדל US
  const router = useRouter();

  // ✅ טעינת reCAPTCHA
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LdIndQrAAAAAHKdTiHWz6ep8FShGPF08g7zIRZJ";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ✅ זיהוי מדינה אוטומטי לפי IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setDefaultCountry(data.country_code.toLowerCase()); // לדוגמה "us"
        }
      })
      .catch(() => setDefaultCountry("us")); // fallback ל-US
  }, []);

  const isValidEmail = (email) => {
    const blockedDomains = ["yandex.com", "mail.ru", "tempmail", "mailinator"];
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;
    if (blockedDomains.some((d) => domain.includes(d))) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ✅ ולידציה בינלאומית לטלפון
  const isValidPhone = (phone) => {
    const regex = /^\+\d{7,15}$/; // מספר בינלאומי 7–15 ספרות
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
    if (!isValidPhone(phone)) {
      setStatus("invalid_phone");
      setLoading(false);
      return;
    }

    // ✅ נתונים ל-HubSpot
    const data = {
      fields: [
        { name: "firstname", value: form.firstname.value },
        { name: "lastname", value: form.lastname.value },
        { name: "email", value: form.email.value },
        { name: "phone", value: phone },
        { name: "name", value: form.company.value },
        { name: "eshet_digital", value: form.service_type.value },
        { name: "b", value: form.message.value },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        "https://forms-eu1.hsforms.com/submissions/v3/integration/submit/146946532/096acd9d-2441-4d91-a2a0-0de36128239a",
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
          </div>

          <div className="form-group">
            <input type="text" name="lastname" placeholder="Last Name*" required />
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address*" required />
          </div>

          <div className="form-group phone-input">
            <PhoneInput
              country={defaultCountry} // ✅ מתעדכן לפי IP
              preferredCountries={["us", "gb", "de", "fr", "it", "es", "nl", "il"]}
              enableSearch={false} 
              countryCodeEditable={false} // ✅ לא מאפשר למחוק את הקידומת
              separateDialCode={false} 
              value={phone}
              onChange={(val) => setPhone("+" + val)} // ✅ אין כפל קידומת
              inputProps={{
                name: "phone",
                required: true,
                placeholder: "Phone Number*",
              }}
            />
          </div>

          <div className="form-group">
            <input type="text" name="company" placeholder="Company" />
          </div>

          <div className="form-group">
            <select name="service_type" required>
              <option value="">Select a Service*</option>
              <option value="Web Development">Web Development</option>
              <option value="Branding">Branding</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
            ></textarea>
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
          <p className="error-msg">✖ Please enter a valid phone number.</p>
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
