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

  // ✅ מאזין לגלילה – משנה מצב שקיפות ההדר
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Eshet Digital" />
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ===== Desktop Menu ===== */}
        <ul className="nav-links desktop-only">
          <li><a href="/">Home</a></li>

          <li className="dropdown">
            <button className="dropbtn">About</button>
            <div className="dropdown-content">
              <a href="/team">Our Team</a>
              <a href="/mission">Our Mission</a>
              <a href="/story">Our Story</a>
            </div>
          </li>

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

        {/* ===== Desktop CTA ===== */}
        <div className="header-cta desktop-only">
          <a href="/get-started" className="cta-btn cta-primary">
            Get Started
          </a>
        </div>

        {/* ===== Mobile Menu ===== */}
        <ul className={`nav-links mobile-only ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>

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

          {/* ✅ Mobile CTAs */}
          <li className="mobile-cta">
            <a
              href="https://www.eshetdigital.com/get-started#contact-form"
              className="cta-btn cta-primary"
            >
              Contact Us
            </a>
            <a
              href="https://www.eshetdigital.com/book"
              className="cta-btn cta-secondary"
            >
              Schedule a Meeting
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
