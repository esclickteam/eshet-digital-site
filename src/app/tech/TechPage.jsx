"use client";

import React from "react";
import { motion } from "framer-motion";
import "./tech.css";

const sections = [
  {
    title: "🛍️ E-Commerce",
    desc: "We build scalable online stores and integrate payments, marketing, and automation tools to maximize sales.",
    logos: [
      { src: "/icons/woocommerce.svg", label: "WooCommerce" },
      { src: "/icons/shopify.svg", label: "Shopify" },
      { src: "/icons/wix.svg", label: "Wix Stores" },
      { src: "/icons/bigcommerce.svg", label: "BigCommerce" },
      { src: "/icons/paypal.svg", label: "PayPal" },
      { src: "/icons/stripe.svg", label: "Stripe" },
      { src: "/icons/cardcom.png", label: "CardCom" },
    ],
    cta: "Build Your Online Store With Us",
  },
  {
    title: "🌐 Front-end",
    desc: "Modern frameworks for sleek, fast, and responsive user interfaces.",
    logos: [
      { src: "/icons/react.svg", label: "React" },
      { src: "/icons/nextjs.svg", label: "Next.js" },
      { src: "/icons/JavaScript.png", label: "JavaScript" },
      { src: "/icons/HTML5.png", label: "HTML5" },
      { src: "/icons/tailwindcss.svg", label: "TailwindCSS" },
    ],
  },
  {
    title: "⚙️ Back-end",
    desc: "Powerful server-side technologies for APIs, databases, and scalability.",
    logos: [
      { src: "/icons/nodejs.svg", label: "Node.js" },
      { src: "/icons/mongodb.svg", label: "MongoDB" },
      { src: "/icons/redis.svg", label: "Redis" },
      { src: "/icons/restapi.svg", label: "REST API" },
      { src: "/icons/railway.jpeg", label: "Railway" },
    ],
  },
  {
    title: "📰 CMS Platforms",
    desc: "Content management made simple, flexible, and powerful.",
    logos: [
      { src: "/icons/wordpress.svg", label: "WordPress" },
      { src: "/icons/Elementor.jpeg", label: "Elementor" },
      { src: "/icons/wix.svg", label: "Wix" },
      { src: "/icons/shopify.svg", label: "Shopify" },
      { src: "/icons/Squarespace.png", label: "Squarespace" },
    ],
  },
];

export default function TechPage() {
  return (
    <div className="tech-page">
      {/* Hero */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="animated-title">
          Technologies That Power <span className="highlight">Success</span>
        </h1>
        <p>
          We combine reliable, modern, and scalable technologies to build
          digital solutions tailored to your business goals.
        </p>
      </motion.section>

      {/* Sections */}
      {sections.map((sec, i) => (
        <section
          className={`tech-section ${i % 2 === 0 ? "normal" : "reverse"}`}
          key={i}
        >
          <div className="tech-text">
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
          </div>

          {/* Logos infinite scroll */}
          <div className="logos-section">
            <div className="logos-slide">
              {sec.logos.map((logo, j) => (
                <div className="logo-card" key={j}>
                  <img
                    src={logo.src}
                    alt={logo.label}
                    loading="lazy"
                    aria-label={logo.label}
                  />
                  <span>{logo.label}</span>
                </div>
              ))}
              {/* שכפול פעם אחת בלבד ליצירת אפקט גלילה חלק */}
              {sec.logos.map((logo, j) => (
                <div className="logo-card" key={`dup-${j}`}>
                  <img
                    src={logo.src}
                    alt={logo.label}
                    loading="lazy"
                    aria-label={logo.label}
                  />
                  <span>{logo.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA only for E-Commerce */}
          {sec.cta && (
            <div className="cta-wrapper">
              <a
                href="https://www.eshetdigital.com/get-started"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {sec.cta}
              </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
