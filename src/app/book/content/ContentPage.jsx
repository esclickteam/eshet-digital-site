"use client";

import React, { useEffect } from "react";
import "../development/development.css"; // שימוש באותו CSS כללי
import FAQ from "../../../../components/faq";

export default function ContentPage() {
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
        <h1 className="dev-title gradient-text">
          Content Writing & Video Editing
        </h1>
        <p className="dev-intro">
          Content Writing & Video Editing – Content that Engages and Converts.
          We craft SEO articles, marketing posts, video scripts, and full
          editing tailored to your brand — ensuring your message is sharp,
          professional, and impactful.
        </p>

        {/* Blocks */}
        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>📝 Marketing & SEO Content</h2>
              <p>
                We create professional articles, marketing content, and posts
                optimized with keywords in your industry. The goal: engage
                readers while boosting your Google ranking.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/content-seo.png" alt="SEO Content" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>🎬 Video Scripts</h2>
              <p>
                Every great video starts with a strong script. We write clear and
                engaging scripts for ads, product videos, and social media
                content.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/content-scripts.png" alt="Video Scripts" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>✂️ Professional Video Editing</h2>
              <p>
                We edit your videos to look professional, smooth, and
                brand-consistent — including titles, graphics, and eye-catching
                effects.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/content-editing.png" alt="Video Editing" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Create Engaging Content
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "How long does it take to create an article or video?",
              answer:
                "Usually a few days, depending on length and complexity. Larger projects may take longer.",
            },
            {
              question: "How do you ensure the content fits my brand?",
              answer:
                "We conduct in-depth research on your business, tone of voice, and target audience to make sure the content feels authentic to your brand.",
            },
            {
              question: "Do I need to provide footage for editing?",
              answer:
                "Both options are possible — we can edit your existing videos or guide you in creating new ones.",
            },
            {
              question: "Why is it important to combine writing and video editing?",
              answer:
                "Written content drives SEO and traffic, while videos boost engagement and conversions — together they maximize results.",
            },
          ]}
        />

        {/* CTA (Footer) */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Create Engaging Content
          </a>
        </div>
      </div>
    </section>
  );
}
