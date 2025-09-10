"use client";
import React from "react";
import "./branding.css";

export default function BrandingPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Graphic Design & Branding</h1>
        <p>
          A strong brand is at the heart of every successful business. Our
          graphic design is not just about looking good – it’s about creating an
          emotional connection with your audience, reflecting your values, and
          leaving a lasting impression.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>🎨 Custom Logos</h2>
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

        <div className="block">
          <h2>🌟 Brand Identity</h2>
          <p>
            Branding goes far beyond a logo. We craft a full visual identity –
            colors, typography, icons, and consistent design – to ensure your
            business looks unified across every customer touchpoint.
          </p>
        </div>

        <div className="block">
          <h2>📢 Marketing Visuals</h2>
          <p>
            We deliver marketing visuals that drive action: social media posts,
            presentations, brochures, ads, and more – all aligned with your brand
            identity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How long does it take to design a professional logo?</h3>
          <p>
            Usually 7–14 business days, depending on complexity and revisions.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can you update or refresh an existing logo?</h3>
          <p>
            Yes, we specialize in rebranding – enhancing an existing logo and
            visual identity while keeping brand recognition intact.
          </p>
        </div>

        <div className="faq-item">
          <h3>
            Why is it important to invest in logo design and social media graphics
            on an ongoing basis?
          </h3>
          <p>
            Because consistent and up-to-date design builds a professional look,
            increases customer trust, and keeps your brand top-of-mind. On social
            media, it’s crucial for both retention and growth.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can the designs be used for print as well?</h3>
          <p>
            Absolutely. All files are delivered in formats suitable for both
            digital and print.
          </p>
        </div>

        <div className="faq-item">
          <h3>What’s the difference between professional and amateur design?</h3>
          <p>
            Professional design creates trust, consistency, and lasting
            impressions – leading to more customers.
          </p>
        </div>
      </section>
    </div>
  );
}
