"use client";

import React, { useEffect } from "react";
import "../development/development.css"; // שימוש ב-CSS הכללי של development
import FAQ from "../../../../components/faq";

export default function BrandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    document
      .querySelectorAll(".dev-block, .feature-card, .faq-section, .cta-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dev-section">
      <div className="container">
        {/* Hero */}
        <h1 className="dev-title gradient-text">Graphic Design & Branding</h1>
        <p className="dev-intro">
          A strong brand is at the heart of every successful business. Our
          graphic design is not just about looking good – it’s about creating an
          emotional connection with your audience, reflecting your values, and
          leaving a lasting impression.
        </p>

        {/* Blocks */}
        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>Custom Logos</h2>
              <p>
                We design unique logos that communicate professionalism and build
                unforgettable brand identity.
              </p>
              <ul>
                <li>✔ Clean and minimal logos</li>
                <li>✔ Bold and premium designs</li>
                <li>✔ Logos optimized for digital & print</li>
              </ul>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/branding-logo.png" alt="Custom Logos" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>Brand Identity</h2>
              <p>
                Branding goes far beyond a logo. We craft a full visual identity –
                colors, typography, icons, and consistent design – to ensure your
                business looks unified across every customer touchpoint.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/branding-identity.png" alt="Brand Identity" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>Marketing Visuals</h2>
              <p>
                We deliver marketing visuals that drive action: social media posts,
                presentations, brochures, ads, and more – all aligned with your brand
                identity.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/branding-visuals.png" alt="Marketing Visuals" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Build Your Brand
          </a>
        </div>

        {/* Features Grid */}
        <div className="features-section">
          <h2 className="features-title">
            What Makes Branding Truly Powerful?
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🎨</div>
              <h3>Creative Logo Design</h3>
              <p>Unique logos that reflect your brand identity and values.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌈</div>
              <h3>Full Brand Identity</h3>
              <p>Consistent colors, typography, and visuals across all platforms.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📢</div>
              <h3>Marketing Materials</h3>
              <p>Brochures, ads, and social media graphics that drive results.</p>
            </div>
            <div className="feature-card">
              <div className="icon">💻</div>
              <h3>Digital & Print Ready</h3>
              <p>Designs optimized for websites, social media, and print.</p>
            </div>
            <div className="feature-card">
              <div className="icon">✨</div>
              <h3>Premium Look & Feel</h3>
              <p>Professional, polished designs that inspire trust.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🖼</div>
              <h3>Visual Storytelling</h3>
              <p>Designs that tell your story and engage your audience.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "How long does it take to design a professional logo?",
              answer:
                "Usually 7–14 business days, depending on complexity and revisions.",
            },
            {
              question: "Can you update or refresh an existing logo?",
              answer:
                "Yes, we specialize in rebranding – enhancing an existing logo and visual identity while keeping brand recognition intact.",
            },
            {
              question:
                "Why is it important to invest in logo design and social media graphics on an ongoing basis?",
              answer:
                "Because consistent and up-to-date design builds a professional look, increases customer trust, and keeps your brand top-of-mind. On social media, it’s crucial for both retention and growth.",
            },
            {
              question: "Can the designs be used for print as well?",
              answer:
                "Absolutely. All files are delivered in formats suitable for both digital and print.",
            },
            {
              question: "What’s the difference between professional and amateur design?",
              answer:
                "Professional design creates trust, consistency, and lasting impressions – leading to more customers.",
            },
          ]}
        />

        {/* CTA (Footer) */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Build Your Brand
          </a>
        </div>
      </div>
    </section>
  );
}
