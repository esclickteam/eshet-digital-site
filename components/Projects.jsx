"use client";
import React, { useEffect } from "react";
import "../app/book/development/development.css";
import FAQ from "./faq";

export default function Projects() {
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
      .querySelectorAll(".project-card, .faq-section, .cta-wrapper")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dev-section">
      <div className="container">
        {/* Hero */}
        <h1 className="dev-title gradient-text">Our Projects</h1>
        <p className="dev-intro">
          Explore some of the projects we’ve crafted — combining strategy,
          design, and technology to deliver impactful digital solutions for our
          clients.
        </p>

        {/* Projects Grid */}
        <div className="features-grid">
          <div className="feature-card project-card">
            <div className="icon">💻</div>
            <h3>Business Website</h3>
            <p>
              A modern, SEO-optimized website built for a local business —
              increasing their leads by 120%.
            </p>
          </div>
          <div className="feature-card project-card">
            <div className="icon">📱</div>
            <h3>Mobile Campaign</h3>
            <p>
              Social media campaign tailored for Instagram & TikTok — reaching
              50K+ users organically.
            </p>
          </div>
          <div className="feature-card project-card">
            <div className="icon">🛍</div>
            <h3>E-Commerce Store</h3>
            <p>
              Full Shopify build with custom design, boosting online sales by
              200% within 3 months.
            </p>
          </div>
          <div className="feature-card project-card">
            <div className="icon">🎥</div>
            <h3>Video Ads</h3>
            <p>
              Engaging ad creatives with professional editing, improving CTR by
              3× compared to previous campaigns.
            </p>
          </div>
          <div className="feature-card project-card">
            <div className="icon">🌍</div>
            <h3>Global Branding</h3>
            <p>
              Rebranding for an international company — building consistency
              across website, socials, and ads.
            </p>
          </div>
          <div className="feature-card project-card">
            <div className="icon">⚡</div>
            <h3>Optimization Project</h3>
            <p>
              Technical optimization improving site performance and achieving
              Google PageSpeed score 95+.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Start Your Project
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "What kind of projects do you take on?",
              answer:
                "We handle websites, e-commerce, branding, digital marketing campaigns, and more.",
            },
            {
              question: "Can you customize projects to my needs?",
              answer:
                "Absolutely. Every project is fully tailored to your business goals.",
            },
            {
              question: "Do you also provide ongoing support?",
              answer:
                "Yes, we offer maintenance, optimization, and scaling to keep your project growing.",
            },
          ]}
        />
      </div>
    </section>
  );
}
