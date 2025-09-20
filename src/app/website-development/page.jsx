"use client";
import React from "react";
import "./WebsiteLanding.css";

export default function WebsiteLanding() {
  return (
    <div className="landing-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>🚀 Build Websites That Convert</h1>
            <p>
              Professional websites built to drive leads and sales for your
              business.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Book a Free Call
              </a>
              <a href="#quote" className="btn btn-outline">
                Get Instant Quote
              </a>
            </div>
            <div className="hero-trust">
              ⭐⭐⭐⭐⭐ <span>Trusted by 50+ Businesses</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-mockup.png" alt="Website mockup" />
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="stats-grid">
          <div className="stat-box purple">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-box pink">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-box orange">
            <h3>2–4</h3>
            <p>Weeks Delivery</p>
          </div>
          <div className="stat-box blue">
            <h3>⭐</h3>
            <p>Dedicated Team</p>
          </div>
        </div>
      </section>

      {/* ===== Portfolio ===== */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="/portfolio/wordpress.jpg" alt="WordPress Project" />
            <h3>WordPress</h3>
            <p>+200% Leads</p>
            <a href="#" className="btn btn-case">View Case Study</a>
          </div>
          <div className="portfolio-card">
            <img src="/portfolio/ecommerce.jpg" alt="Ecommerce Project" />
            <h3>eCommerce</h3>
            <p>Up to 50% less cost</p>
            <a href="#" className="btn btn-case">View Case Study</a>
          </div>
          <div className="portfolio-card">
            <img src="/portfolio/custom.jpg" alt="Custom Project" />
            <h3>Custom</h3>
            <p>Brand Focused</p>
            <a href="#" className="btn btn-case">View Case Study</a>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img src="/clients/anna.jpg" alt="Anna R." />
          <p>
            “The results were amazing – our leads and sales have grown
            consistently.”
          </p>
          <h4>⭐ ⭐ ⭐ ⭐ ⭐ Anna R.</h4>
        </div>
        <div className="testimonial">
          <img src="/clients/james.jpg" alt="James S." />
          <p>
            “Outstanding service and a fantastic team. Couldn’t be happier!”
          </p>
          <h4>⭐ ⭐ ⭐ ⭐ ⭐ James S.</h4>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>How long does it take?</h3>
          <p>
            Most websites are built in 2–4 weeks, depending on the project’s
            complexity.
          </p>
        </div>
        <div className="faq-item">
          <h3>What if I already have a site?</h3>
          <p>
            We offer redesign services to improve your sales performance and
            experience.
          </p>
        </div>
        <div className="faq-item">
          <h3>What if I’m not satisfied?</h3>
          <p>
            We work closely with you and provide unlimited revisions until
            launch.
          </p>
        </div>
      </section>
    </div>
  );
}
