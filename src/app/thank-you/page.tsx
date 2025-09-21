import "./thank-you.css"; // ✅ Import the CSS

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
          We’ve received your details and will be in touch shortly.
        </p>
        <p className="thankyou-subtext">
          Looking forward to exploring new ideas together!
        </p>

        {/* CTA Buttons */}
        <div className="thankyou-actions">
          <a href="/projects" className="thankyou-btn primary">
            View Projects
          </a>
          <a href="tel:+19179476813" className="thankyou-btn secondary">
            Talk to Us Now
          </a>
        </div>
      </div>
    </div>
  );
}
