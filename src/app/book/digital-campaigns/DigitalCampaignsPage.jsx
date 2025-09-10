"use client";

import React, { useEffect } from "react";
import "../development/development.css";
import FAQ from "../../../../components/faq";

export default function DigitalCampaignsPage() {
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
          Digital Campaign Management that Delivers Results
        </h1>
        <p className="dev-intro">
          We run smart campaigns on Facebook, Instagram, Google, and beyond —
          using data-driven strategies, creative content, and continuous
          optimization. Our goal: generate more leads, more sales, and real
          business growth.
        </p>

        {/* Blocks */}
        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>📊 Data-Driven Strategy</h2>
              <p>
                We don’t guess — we analyze. Every campaign is built on audience
                research, competitor insights, and strategic planning.
              </p>
              <ul>
                <li>✔ Target audience identification</li>
                <li>✔ Precise segmentation</li>
                <li>✔ Continuous tracking & insights</li>
              </ul>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/campaign-strategy.png" alt="Campaign Strategy" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>🎨 Creatives that Convert</h2>
              <p>
                Great ads aren’t just pretty — they convert. We craft unique
                creatives that combine compelling copy, visuals, and strong
                calls-to-action.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/campaign-creatives.png" alt="Creatives" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content">
            <div className="block-text">
              <h2>⚡ Continuous Optimization</h2>
              <p>
                A well-managed campaign never stands still. We perform daily
                optimizations to ensure you get the maximum ROI from your budget.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/campaign-optimization.png" alt="Optimization" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-block">
          <div className="block-content reverse">
            <div className="block-text">
              <h2>📈 Results that Speak for Themselves</h2>
              <p>
                At the end of the day — results matter. We track performance,
                provide clear transparent reports, and ensure every dollar works
                for you.
              </p>
            </div>
            <div className="block-image">
              <div className="image-wrapper">
                <img src="/images/campaign-results.png" alt="Results" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Launch Your Campaign
          </a>
        </div>

        {/* FAQ */}
        <FAQ
          faqs={[
            {
              question: "How long does it take to see results?",
              answer:
                "Results vary by industry and budget. You’ll often see initial results within the first month, with significant improvements after ongoing optimization.",
            },
            {
              question: "What’s the minimum budget to start?",
              answer:
                "We recommend starting with a budget of $1,000–$1,500 per month to allow proper testing and optimization.",
            },
            {
              question:
                "Where should I advertise — Facebook, Instagram, or Google?",
              answer:
                "It depends on your product and audience. We analyze where your customers are and allocate budget accordingly.",
            },
            {
              question:
                "How long should a campaign run before knowing if it’s successful?",
              answer:
                "Digital campaigns can’t be measured in just a few days. Typically, at least 4–6 weeks of activity, testing, and optimization are needed to draw reliable conclusions.",
            },
            {
              question: "Why hire an agency instead of managing campaigns alone?",
              answer:
                "Managing campaigns alone often leads to wasted spend on trial-and-error. An agency brings expertise, experience, and advanced tools to maximize ROI.",
            },
            {
              question: "How do we know the campaign is successful?",
              answer:
                "We provide detailed, transparent reports — including clicks, leads, cost-per-acquisition, and real ROI tracking.",
            },
          ]}
        />

        {/* CTA (Footer) */}
        <div className="cta-wrapper">
          <a href="/get-started" className="cta-button">
            Launch Your Campaign
          </a>
        </div>
      </div>
    </section>
  );
}
