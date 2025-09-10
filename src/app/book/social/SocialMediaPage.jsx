"use client";
import React from "react";
import "./social.css";

export default function SocialMediaPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Social Media Design & Content</h1>
        <p>
          Social Media Design & Content – Stand Out and Connect. We create custom
          posts, stories, and banners tailored to your brand, designed to boost
          engagement and strengthen your online presence.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>✍️ Custom Content</h2>
          <p>
            We don’t use generic templates – we craft unique content that reflects
            your brand’s voice.
          </p>
          <ul>
            <li>✔ Marketing posts</li>
            <li>✔ Interactive stories</li>
            <li>✔ Targeted banners & ads</li>
          </ul>
        </div>

        <div className="block">
          <h2>🎨 Standout Design</h2>
          <p>
            In a fast-scrolling world, design is the difference between being
            ignored and being noticed. We combine colors, typography, and
            graphics that create a powerful visual presence.
          </p>
        </div>

        <div className="block">
          <h2>📊 Data-Driven Strategy</h2>
          <p>
            Beyond design, we analyze performance and create content based on
            insights and data. This ensures higher engagement and conversions
            month after month.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How many posts are included in a monthly package?</h3>
          <p>
            We offer different plans – starting from 8 posts per month up to full
            content management packages.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I get stories in addition to posts?</h3>
          <p>Absolutely. Our packages include custom-designed stories as well.</p>
        </div>

        <div className="faq-item">
          <h3>Why is social media design important?</h3>
          <p>
            Because it’s the difference between amateur content that gets skipped
            and a professional brand that builds trust and results.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you design creatives for paid campaigns?</h3>
          <p>
            Yes. We create unique creatives tailored for paid campaigns on
            Facebook, Instagram, LinkedIn, and Google.
          </p>
        </div>

        <div className="faq-item">
          <h3>
            Can you keep brand consistency between my website, logo, and social
            media?
          </h3>
          <p>
            Definitely. We create a unified visual identity that aligns across all
            digital platforms.
          </p>
        </div>
      </section>
    </div>
  );
}
