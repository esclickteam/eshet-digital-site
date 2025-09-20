"use client";
import React from "react";
import "./WebsiteLanding.css";

export default function WebsiteLanding() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן אפשר להוסיף API ליצירת ליד (למשל fetch לשרת שלך)
    alert("✅ Thank you! We’ll contact you shortly.");
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Build a Website That Brings Clients 🚀</h1>
          <p>
            Professional website development for US businesses.
            Mobile-friendly, SEO-ready, and designed to grow your sales.
          </p>
          <a href="/book" className="cta-btn" aria-label="Book a free discovery call">
            Book a Free Discovery Call
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img src="/icons/Design.svg" alt="Custom website design icon" />
            <h3>Custom Design</h3>
            <p>Modern, branded, and built to impress clients.</p>
          </div>
          <div className="feature">
            <img src="/icons/Mobile.svg" alt="Mobile and SEO optimization icon" />
            <h3>Mobile & SEO Ready</h3>
            <p>Optimized for smartphones and search engines.</p>
          </div>
          <div className="feature">
            <img src="/icons/Speed.svg" alt="Website speed optimization icon" />
            <h3>Fast & Secure</h3>
            <p>Quick turnaround with top-notch security.</p>
          </div>
          <div className="feature">
            <img src="/icons/Support.svg" alt="Customer support icon" />
            <h3>Dedicated Support</h3>
            <p>Personalized guidance from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Our Work</h2>
        <div className="portfolio-grid">
          <img src="/portfolio/site1.jpg" alt="Example of a business website we developed" />
          <img src="/portfolio/site2.jpg" alt="Example of an ecommerce website we created" />
          <img src="/portfolio/site3.jpg" alt="Example of a custom website design project" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          “Eshet Digital built us a professional site that doubled our leads
          within two months. Highly recommend!” – John D.
        </blockquote>
        <blockquote>
          “Fast, creative, and reliable. Our ecommerce sales skyrocketed.”
          – Sarah M.
        </blockquote>
      </section>

      {/* CTA Form */}
      <section id="contact" className="cta-section">
        <h2>Let’s Build Your Website</h2>
        <form className="lead-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required aria-label="Name" />
          <input type="email" placeholder="Email" name="email" required aria-label="Email" />
          <input type="tel" placeholder="Phone" name="phone" required aria-label="Phone" />
          <button type="submit" className="cta-btn">
            Book a Discovery Call
          </button>
        </form>
        <p>
          Prefer WhatsApp?{" "}
          <a
            href="https://wa.me/19179476813"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            Chat with us
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How long does it take?</summary>
          <p>Most projects take 2–4 weeks, depending on complexity.</p>
        </details>
        <details>
          <summary>Do you build ecommerce sites?</summary>
          <p>Yes – Shopify, WordPress, WooCommerce, and custom stores.</p>
        </details>
        <details>
          <summary>How much does it cost?</summary>
          <p>Projects start from $3,000 depending on scope and features.</p>
        </details>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="final-cta">
        <h2>Ready to Get Started?</h2>
        <a href="/book" className="cta-btn" aria-label="Book a discovery call now">
          Book a Free Discovery Call
        </a>
      </section>
    </div>
  );
}
