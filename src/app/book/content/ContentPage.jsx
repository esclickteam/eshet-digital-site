"use client";
import React from "react";
import "./content.css";

export default function ContentPage() {
  return (
    <div className="service-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Content Writing & Video Editing</h1>
        <p>
          Content Writing & Video Editing – Content that Engages and Converts. We
          craft SEO articles, marketing posts, video scripts, and full editing
          tailored to your brand — ensuring your message is sharp, professional,
          and impactful.
        </p>
      </section>

      {/* Blocks */}
      <section className="blocks">
        <div className="block">
          <h2>📝 Marketing & SEO Content</h2>
          <p>
            We create professional articles, marketing content, and posts
            optimized with keywords in your industry. The goal: engage readers
            while boosting your Google ranking.
          </p>
        </div>

        <div className="block">
          <h2>🎬 Video Scripts</h2>
          <p>
            Every great video starts with a strong script. We write clear and
            engaging scripts for ads, product videos, and social media content.
          </p>
        </div>

        <div className="block">
          <h2>✂️ Professional Video Editing</h2>
          <p>
            We edit your videos to look professional, smooth, and brand-consistent
            — including titles, graphics, and eye-catching effects.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How long does it take to create an article or video?</h3>
          <p>
            Usually a few days, depending on length and complexity. Larger
            projects may take longer.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do you ensure the content fits my brand?</h3>
          <p>
            We conduct in-depth research on your business, tone of voice, and
            target audience to make sure the content feels authentic to your
            brand.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do I need to provide footage for editing?</h3>
          <p>
            Both options are possible — we can edit your existing videos or guide
            you in creating new ones.
          </p>
        </div>

        <div className="faq-item">
          <h3>Why is it important to combine writing and video editing?</h3>
          <p>
            Written content drives SEO and traffic, while videos boost engagement
            and conversions — together they maximize results.
          </p>
        </div>
      </section>
    </div>
  );
}
