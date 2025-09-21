import "./thank-you.css"; // ✅ מייבא את ה־CSS

export default function ThankYouPage() {
  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        {/* Success Icon */}
        <svg
          className="thankyou-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1>Thank You!</h1>
        <p>
          Your request has been received. Our team will get back to you within
          24 hours.
        </p>

        <a href="/portfolio" className="thankyou-btn">
          View Portfolio
        </a>

        <div className="thankyou-contact">
          Prefer to talk right now?{" "}
          <a href="tel:+19179476813">+1 (917) 947-6813</a> |{" "}
          <a href="tel:+972533907570">+972 53-390-7570</a>
        </div>
      </div>
    </div>
  );
}
