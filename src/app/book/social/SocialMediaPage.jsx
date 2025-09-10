"use client";

import React, { useEffect } from "react";
import "../development/development.css"; // שימוש באותו CSS כללי
import FAQ from "../../../../components/faq";

export default function SocialMediaPage() {
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
        <h1 className="dev-title gradient-text">Social Media Design & Content</h1>
        <p className="dev-intro">
          Social Media Design & Content – Stand Out and Connect. We create custom
          posts, stories, and banners tailored to your brand, designed to boost
          engagement and strengthen your online presence.
        </p>

        {/* Blocks */}
        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
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
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/social-content.png" alt="Custom Content" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>🎨 Standout Design</h2>
              <p>
                In a fast-scrolling world, design is the difference between being
                ignored and being noticed. We combine colors, typography, and graphics
                that create a powerful visual presence.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/social-design.png" alt="Standout Design" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>📊 Data-Driven Strategy</h2>
              <p>
                Beyond design, we analyze performance and create content based on
                insights and data. This ensures higher engagement and conversions
                month after month.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/social-strategy.png" alt="Data Strategy" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Boost Your Social Media
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "How many posts are included in a monthly package?",
              answer:
                "We offer different plans – starting from 8 posts per month up to full content management packages.",
            },
            {
              question: "Can I get stories in addition to posts?",
              answer: "Absolutely. Our packages include custom-designed stories as well.",
            },
            {
              question: "Why is social media design important?",
              answer:
                "Because it’s the difference between amateur content that gets skipped and a professional brand that builds trust and results.",
            },
            {
              question: "Do you design creatives for paid campaigns?",
              answer:
                "Yes. We create unique creatives tailored for paid campaigns on Facebook, Instagram, LinkedIn, and Google.",
            },
            {
              question:
                "Can you keep brand consistency between my website, logo, and social media?",
              answer:
                "Definitely. We create a unified visual identity that aligns across all digital platforms.",
            },
          ]}
        />

        {/* CTA (Footer) */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Boost Your Social Media
          </a>
        </div>
      </div>
    </section>
  );
}
