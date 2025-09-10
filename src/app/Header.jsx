"use client";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {/* Left side – Logo */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Eshet Digital" />
          </a>
        </div>

        {/* Center – Navigation */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>

          {/* About with dropdown */}
          <li className="dropdown">
            <button className="dropbtn">
              About
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="dropdown-content">
              <a href="/team">Our Team</a>
              <a href="/mission">Our Mission</a>
              <a href="/story">Our Story</a>
            </div>
          </li>

          {/* Services with dropdown */}
          <li className="dropdown">
            <button className="dropbtn">
              Services
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="dropdown-content">
              <div className="dropdown-col">
                <a href="/book/development">Website Development</a>
                <a href="/book/digital-campaigns">Digital Campaigns</a>
                <a href="/book/branding">Branding & Design</a>
              </div>
              <div className="dropdown-col">
                <a href="/book/social">Social Media</a>
                <a href="/book/content">Content & Video</a>
                <a href="/book/strategy">Strategy & Consulting</a>
              </div>
            </div>
          </li>

          {/* רגיל – בלי חץ */}
          <li><a href="/tech">Tech</a></li>
        </ul>

        {/* Right side – WhatsApp CTA */}
        <div className="header-cta">
          <a
            href="https://wa.me/972526850711?text=Hello,%20I%20would%20like%20more%20details%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
