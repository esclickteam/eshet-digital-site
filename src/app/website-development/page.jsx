"use client";
import React from "react";
import "./WebsiteLanding.css";
import GetStartedForm from "../../../components/GetStartedForm";

export default function WebsiteLanding() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Websites That Grow Your Business 🚀</h1>
            <p>
              Custom websites for US businesses. Mobile-first, SEO-ready, and
              designed to convert visitors into clients.
            </p>
            <a
              href="#contact"
              className="btn-primary"
              aria-label="Book a free discovery call"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img src="/icons/Design.svg" alt="Custom website design" />
            <h3>Custom Design</h3>
            <p>Modern, branded, and built to impress clients.</p>
          </div>
          <div className="feature">
            <img src="/icons/Mobile.svg" alt="Mobile and SEO optimization" />
            <h3>Mobile & SEO Ready</h3>
            <p>Optimized for smartphones and search engines.</p>
          </div>
          <div className="feature">
            <img src="/icons/Speed.svg" alt="Website speed optimization" />
            <h3>Fast & Secure</h3>
            <p>Quick turnaround with top-notch security.</p>
          </div>
          <div className="feature">
            <img src="/icons/Support.svg" alt="Customer support" />
            <h3>Dedicated Support</h3>
            <p>Personalized guidance from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Our Work</h2>
        <div className="portfolio-grid">
          <figure>
            <img src="/portfolio/site1.jpg" alt="Clinic website project" />
            <figcaption>Clinic Website – React + SEO</figcaption>
          </figure>
          <figure>
            <img src="/portfolio/site2.jpg" alt="Ecommerce website project" />
            <figcaption>Ecommerce Store – WooCommerce</figcaption>
          </figure>
          <figure>
            <img src="/portfolio/site3.jpg" alt="Custom website design project" />
            <figcaption>Custom Website – Branding Focus</figcaption>
          </figure>
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
          “Fast, creative, and reliable. Our ecommerce sales skyrocketed.” – Sarah M.
        </blockquote>
      </section>

      {/* ✅ CTA Form – הטופס החדש */}
      <section id="contact" className="cta-section">
        <GetStartedForm />
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
        <a
          href="#contact"
          className="btn-primary"
          aria-label="Book a discovery call now"
        >
          Book a Free Discovery Call
        </a>
      </section>
    </div>
  );
}
