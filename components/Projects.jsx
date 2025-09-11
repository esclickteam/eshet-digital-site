"use client";
import React, { useEffect, useState } from "react";
import "./Projects.css";
import FAQ from "./faq";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Website Design");

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

  // כרטיסים לכל קטגוריה
  const projects = {
    "Website Design": [
      {
        icon: "💻",
        title: "Business Website",
        desc: "SEO-optimized website for a local business — boosting leads by 120%.",
      },
      {
        icon: "🌐",
        title: "Corporate Landing Page",
        desc: "Clean design with conversion-focused CTA — increased signups by 80%.",
      },
    ],
    "E-commerce": [
      {
        icon: "🛍",
        title: "Online Store",
        desc: "Shopify build with custom design, sales up by 200% in 3 months.",
      },
      {
        icon: "📦",
        title: "Product Catalog Website",
        desc: "Modern catalog design with easy checkout — improved UX and retention.",
      },
    ],
    "Branding & Logo Design": [
      {
        icon: "🎨",
        title: "Luxury Beauty Studio",
        desc: "Minimalist logo + visual identity — strong brand recognition online.",
      },
      {
        icon: "✒️",
        title: "Tech Startup Branding",
        desc: "Logo, typography, and social media kit for a new SaaS brand.",
      },
    ],
    "Digital Marketing Campaigns": [
      {
        icon: "📱",
        title: "Instagram Campaign",
        desc: "Reaching 50K+ users organically with engaging reels & carousels.",
      },
      {
        icon: "🎥",
        title: "Video Ads",
        desc: "CTR improved ×3 with creative video editing for Facebook ads.",
      },
    ],
  };

  return (
    <section className="dev-section">
      <div className="container">
        {/* Hero */}
        <h1 className="dev-title gradient-text">Our Projects</h1>
        <p className="dev-intro">
          Explore projects we’ve crafted — combining strategy, design, and
          technology to deliver impactful digital solutions.
        </p>

        {/* Tabs */}
        <div className="tabs">
          {Object.keys(projects).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="features-grid">
          {projects[activeTab].map((proj, i) => (
            <div key={i} className="feature-card project-card">
              <div className="icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
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
                "We handle websites, e-commerce, branding, and digital marketing campaigns.",
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
