"use client";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // ✅ שינוי שקיפות הדר בגלילה
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ מניעת גלילה כשהתפריט פתוח
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        {/* ===== Logo ===== */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Eshet Digital" />
          </a>
        </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="nav-links desktop-only">
          {/* About */}
          <li className="dropdown">
            <button className="dropbtn">About</button>
            <div className="dropdown-content">
              <a href="/team">Our Team</a>
              <a href="/mission">Our Mission</a>
              <a href="/story">Our Story</a>
            </div>
          </li>

          {/* Services */}
          <li className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <div className="dropdown-col">
                <a href="/book/development">Website Development</a>
                <a href="/book/digital-campaigns">Digital Campaigns</a>
                <a href="/book/branding">Branding & Design</a>
              </div>
              <div className="dropdown-col">
                <a href="/book/social">Social Media</a>
                <a href="/book/content">Content & Video</a>
                <a href="/book/strategy">Digital Strategy & Maintenance</a>
              </div>
            </div>
          </li>

          <li><a href="/projects">Projects</a></li>
          <li><a href="/tech">Tech</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* ===== Desktop CTA (Neon Get Started) ===== */}
        <div className="header-cta desktop-only">
          <a href="/get-started" className="cta-btn">
            Get Started
          </a>
        </div>

        {/* ===== Hamburger (Mobile only) ===== */}
        <button
          className={`hamburger mobile-only ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ===== Overlay ===== */}
        <div
          className={`mobile-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* ===== Mobile Fullscreen Menu ===== */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {/* About */}
            <li className={`dropdown-mobile ${openDropdown === "about" ? "open" : ""}`}>
              <button
                onClick={() => toggleDropdown("about")}
                className={`dropbtn ${openDropdown === "about" ? "open" : ""}`}
              >
                About
              </button>
              {openDropdown === "about" && (
                <div className="dropdown-content-mobile">
                  <a href="/team">Our Team</a>
                  <a href="/mission">Our Mission</a>
                  <a href="/story">Our Story</a>
                </div>
              )}
            </li>

            {/* Services */}
            <li className={`dropdown-mobile ${openDropdown === "services" ? "open" : ""}`}>
              <button
                onClick={() => toggleDropdown("services")}
                className={`dropbtn ${openDropdown === "services" ? "open" : ""}`}
              >
                Services
              </button>
              {openDropdown === "services" && (
                <div className="dropdown-content-mobile">
                  <a href="/book/development">Website Development</a>
                  <a href="/book/digital-campaigns">Digital Campaigns</a>
                  <a href="/book/branding">Branding & Design</a>
                  <a href="/book/social">Social Media</a>
                  <a href="/book/content">Content & Video</a>
                  <a href="/book/strategy">Digital Strategy & Maintenance</a>
                </div>
              )}
            </li>

            <li><a href="/projects">Projects</a></li>
            <li><a href="/tech">Tech</a></li>
            <li><a href="/contact">Contact</a></li>

            {/* ✅ Mobile CTAs (שונים מהדסקטופ) */}
            <li className="mobile-cta">
              <a
                href="https://www.eshetdigital.com/get-started#contact-form"
                className="cta-btn cta-contact"
              >
                Contact Us
              </a>
              <a
                href="https://www.eshetdigital.com/book"
                className="cta-btn cta-meeting"
              >
                Schedule a Meeting
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
