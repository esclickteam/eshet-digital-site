"use client";
import React from "react";
import "./WebsiteLanding.css";

export default function WebsiteLanding() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build a Website That Brings Clients 🚀</h1>
          <p>
            Professional website development for US businesses. 
            Mobile-friendly, SEO-ready, and designed to grow your sales.
          </p>
          <a href="/book" className="cta-btn">Book a Free Discovery Call</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img src="/icons/Design.svg" alt="Design" />
            <h3>Custom Design</h3>
            <p>Modern, branded, and built to impress clients.</p>
          </div>
          <div className="feature">
            <img src="/icons/Mobile.svg" alt="Mobile" />
            <h3>Mobile & SEO Ready</h3>
            <p>Optimized for smartphones and search engines.</p>
          </div>
          <div className="feature">
            <img src="/icons/Speed.svg" alt="Speed" />
            <h3>Fast & Secure</h3>
            <p>Quick turnaround with top-notch security.</p>
          </div>
          <div className="feature">
            <img src="/icons/Support.svg" alt="Support" />
            <h3>Dedicated Support</h3>
            <p>Personalized guidance from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Our Work</h2>
        <div className="portfolio-grid">
          <img src="/portfolio/site1.jpg" alt="Website 1" />
          <img src="/portfolio/site2.jpg" alt="Website 2" />
          <img src="/portfolio/site3.jpg" alt="Website 3" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
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
      <section className="cta-section">
        <h2>Let’s Build Your Website</h2>
        <form className="lead-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <button type="submit" className="cta-btn">Book a Discovery Call</button>
        </form>
        <p>Prefer WhatsApp? <a href="https://wa.me/19179476813" target="_blank">Chat with us</a></p>
      </section>

      {/* FAQ */}
      <section className="faq">
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
      <section className="final-cta">
        <h2>Ready to Get Started?</h2>
        <a href="/book" className="cta-btn">Book a Free Discovery Call</a>
      </section>
    </div>
  );
}
