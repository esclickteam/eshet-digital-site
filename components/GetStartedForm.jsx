"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import "./GetStartedForm.css";

export default function GetStartedForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("us");

  const [emailFeedback, setEmailFeedback] = useState("");
  const [phoneFeedback, setPhoneFeedback] = useState("");

  const router = useRouter();

  // ✅ טעינת reCAPTCHA
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LdIndQrAAAAAHKdTiHWz6ep8FShGPF08g7zIRZJ";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ✅ זיהוי מדינה לפי IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setDefaultCountry(data.country_code.toLowerCase());
        }
      })
      .catch(() => setDefaultCountry("us"));
  }, []);

  // ✅ ולידציית טלפון
  const isValidPhone = (phone) => /^\+\d{7,15}$/.test(phone);

  // ✅ ממפה תשובת ה־API לפידבק ידידותי
  const applyEmailFeedback = (data) => {
    if (!data.valid) {
      switch (data.reason) {
        case "DISPOSABLE":
          setEmailFeedback("✖ We don’t accept temporary email addresses.");
          break;
        case "UNDELIVERABLE":
          setEmailFeedback("✖ This email address does not exist.");
          break;
        case "INVALID_FORMAT":
          setEmailFeedback("✖ Please enter a valid email address.");
          break;
        default:
          setEmailFeedback("✖ Invalid email.");
      }
    } else {
      switch (data.reason) {
        case "RISKY":
          setEmailFeedback("⚠ This email may be risky – please double-check.");
          break;
        case "DELIVERABLE":
          setEmailFeedback("✔ Email looks good!");
          break;
        case "API_UNAVAILABLE":
          setEmailFeedback("⚠ Validation service unavailable, email looks OK.");
          break;
        default:
          setEmailFeedback("✔ Email looks fine.");
      }
    }
  };

  // ✅ בדיקת אימייל
  const verifyEmail = async (email) => {
    if (!email) {
      setEmailFeedback("✖ Please enter your email address.");
      return;
    }
    try {
      const res = await fetch("https://api.eshetdigital.com/verifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      applyEmailFeedback(data);
    } catch (err) {
      console.error("Email check failed:", err);
      setEmailFeedback("⚠ Could not validate email right now.");
    }
  };

  // ✅ שליחה
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.target;

    // Honeypot
    if (form.website_url_2.value) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // reCAPTCHA
    let token = "";
    try {
      if (window.grecaptcha?.execute) {
        token = await window.grecaptcha.execute(
          "6LdIndQrAAAAAHKdTiHWz6ep8FShGPF08g7zIRZJ",
          { action: "submit" }
        );
      }
    } catch {}
    if (!token) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // ✅ אימייל בזמן שליחה
    try {
      const verifyRes = await fetch("https://api.eshetdigital.com/verifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email.value }),
      });
      const verifyData = await verifyRes.json();
      applyEmailFeedback(verifyData);
      if (!verifyData.valid) {
        setStatus("invalid_email");
        setLoading(false);
        return;
      }
    } catch (err) {
      console.error("Email verify on submit failed:", err);
      setEmailFeedback("⚠ Could not validate email right now.");
      setStatus("invalid_email");
      setLoading(false);
      return;
    }

    // ✅ טלפון
    if (!isValidPhone(phone)) {
      setPhoneFeedback("✖ Please enter a valid phone number.");
      setStatus("invalid_phone");
      setLoading(false);
      return;
    } else {
      setPhoneFeedback("✔ Phone number looks good!");
    }

    // ✅ נתונים ל-HubSpot
    const data = {
      fields: [
        { name: "firstname", value: form.name.value }, // 👈 עכשיו שדה אחד בלבד
        { name: "email", value: form.email.value },
        { name: "phone", value: phone },
        { name: "company", value: form.company.value },
        { name: "eshet_digital", value: form.service_type.value },
        { name: "message", value: form.message.value },
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
        setEmailFeedback("");
        setPhoneFeedback("");
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
        <p className="form-subtitle">Our team will get back to you within 24 hours</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name*" required />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              onBlur={(e) => verifyEmail(e.target.value)}
            />
            {emailFeedback && (
              <p
                className={`feedback ${
                  emailFeedback.startsWith("✔")
                    ? "success"
                    : emailFeedback.startsWith("⚠")
                    ? "warning"
                    : "error"
                }`}
              >
                {emailFeedback}
              </p>
            )}
          </div>

          <div className="form-group phone-input">
            <PhoneInput
              defaultCountry={defaultCountry}
              value={phone}
              onChange={setPhone}
              inputClassName="phone-field"
            />
            {phoneFeedback && (
              <p
                className={`feedback ${
                  phoneFeedback.startsWith("✔")
                    ? "success"
                    : phoneFeedback.startsWith("⚠")
                    ? "warning"
                    : "error"
                }`}
              >
                {phoneFeedback}
              </p>
            )}
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
            <textarea name="message" placeholder="How can we help you?" rows="4"></textarea>
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

        {status === "error" && (
          <p className="feedback error">✖ Oops! Something went wrong, please try again.</p>
        )}
      </div>
    </section>
  );
}
